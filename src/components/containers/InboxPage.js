import {Grid, Switch } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_message, fetch_messages, patch_username } from "../../actions";
import AbsoluteWrapeer from "../../route/AbsoluteWrapper";
import MessageList from "../Messages/MessageList";
import UsernameConfig from "../UsernameConfig";
const InboxPage = () => {
  const username = useSelector((state) => state.auth.userDetails.username)
  const messages = useSelector((state) => state.messages)
  const [sentFilterFlag, setsentFilterFlag] = useState(false)

  const setFilterFlag = () =>{
    setsentFilterFlag(!sentFilterFlag)
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_messages(username));
    return () =>{
      
    }
  }, [username, dispatch]);

  const deleteFunc = (id) => {
    dispatch(delete_message(id));
  };

  const saveUsername = (newUsername)=>{
      dispatch(patch_username(newUsername))
  }

  let filter = (sentFilterFlag) ? messages.filter((msg) => {return  msg.Receiver!== "Me"&&(msg.Sender === username || msg.Sender === "Me")}): messages.filter((msg) => {return  msg.Sender!=="Me" &&(msg.Receiver === username || msg.Receiver === "Me")});
  return (
    <AbsoluteWrapeer>
      <div>
      <UsernameConfig username={username} saveUsernameFunc={saveUsername}/>
      <Grid component="label" container style={{marginLeft:"5%"}} alignItems="center" spacing={1}>
      <Grid item>Received</Grid>
      <Grid item>
        <Switch
            checked={sentFilterFlag}
            onChange={()=> {setFilterFlag()}}
            name="sentFilterSwitch"
            color="default"
        />
      </Grid>
      <Grid item>Sent</Grid>
</Grid>

        <MessageList messages={filter || messages} deleteFunction={deleteFunc} />
      </div>
    </AbsoluteWrapeer>
  );
};

export default InboxPage;
