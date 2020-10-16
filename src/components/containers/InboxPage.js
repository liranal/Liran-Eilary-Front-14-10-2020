import { FormControlLabel, Switch } from "@material-ui/core";
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

  let filter = (sentFilterFlag) ? messages.filter((msg) => {return  msg.Sender === username}): null;
  return (
    <AbsoluteWrapeer>
      <div>
      <UsernameConfig username={username} saveUsernameFunc={saveUsername}/>
        <FormControlLabel
        style={{marginLeft:"5%"}}
        control={
          <Switch
            checked={sentFilterFlag}
            onChange={()=> {setFilterFlag()}}
            name="sentFilterSwitch"
            color="primary"
          />
        }
        label="Sent Filter"
      />
        <MessageList messages={filter || messages} deleteFunction={deleteFunc} />
      </div>
    </AbsoluteWrapeer>
  );
};

export default InboxPage;
