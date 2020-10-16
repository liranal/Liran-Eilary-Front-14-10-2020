import { Button, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const UsernameConfig = ({username, saveUsernameFunc}) =>{
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


    const classes = useStyles();
    return(
    <div>
        <TextField value={usernameProp}onChange={(e)=>setusernameProp(e.target.value)} className={classes.underline} InputProps={{ classes }} style={{marginLeft:"5%"}}/>
        {usernameProp !== username ? <Button onClick={() => saveUsernameFunc(usernameProp)}>Save</Button>:null}
    </div>
    )
}

export default UsernameConfig