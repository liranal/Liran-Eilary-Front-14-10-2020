import {Dialog, DialogTitle } from '@material-ui/core'
import React from 'react'

const Popup = ({open, err, msg, handleClose}) =>{
    return(
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{msg}</DialogTitle>
      </Dialog>
      </div>
    )
}

export default Popup