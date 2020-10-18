import { Button, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react';

const UsernameConfig = ({username, saveUsernameFunc}) =>{
    const [usernameErr, setusernameErr] = useState(false);
    const [usernameProp, setusernameProp] = useState(username)
    const useStyles = makeStyles(() => ({
        underline: {
          // "&:before": {
          //   borderBottom: "none"
          // },
          // "&:after": {
          //   borderBottom: "none"
          // }
        }
      }));

      useEffect(() => {
        if(!usernameProp || usernameProp === username || usernameProp.length < 3){
          setusernameErr(true)
        }else{
          setusernameErr(false)
        }
      }, [usernameProp, username]);

    const classes = useStyles();
    return(
    <div>
        <TextField value={usernameProp}onChange={(e)=>setusernameProp(e.target.value)} className={classes.underline} InputProps={{ classes }} style={{marginLeft:"5%"}}/>
        { !usernameErr ? <Button onClick={() => saveUsernameFunc(usernameProp)}>Save</Button>:null}
    </div>
    )
}

export default UsernameConfig