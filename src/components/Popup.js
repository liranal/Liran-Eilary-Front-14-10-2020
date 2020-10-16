import {Dialog, DialogTitle, makeStyles } from '@material-ui/core'
import React from 'react'

const Popup = ({note, err, msg, handleClose}) =>{
  const useStyles = makeStyles((theme) => ({
    alert: {
      backgroundColor: "rgba(245, 1, 1, 0.575)"

    },
    success: {
      backgroundColor: "rgba(21, 255, 0, 0.534)"
        }
  }));

    const classes = useStyles();
    return(
    <div>
      <Dialog
        open={note || err}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={note ? classes.success : err ? classes.alert : null}>{msg}</DialogTitle>
      </Dialog>
      </div>
    )
}

export default Popup