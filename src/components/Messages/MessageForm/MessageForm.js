import React, { useState } from "react";
import { Button, Input, TextareaAutosize } from "@material-ui/core";
import "./MessageForm.scss"
const MessageForm = ({ SendFunc }) => {
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [receiverErr, setreceiverErr] = useState(false);
  const [subjectErr, setsubjectErr] = useState(false);
  const clickSend = () => {
    let messageObj = {
      receiver,
      subject,
      message,
      date: new Date(),
    };
    
    SendFunc(messageObj);
  };

  const validation = (e)=>{
    e.preventDefault();
    if(receiver === ""){
      return setreceiverErr(true);
    }else{setreceiverErr(false)}
    if(subject === ""){
      return setsubjectErr(true);
    }else{setsubjectErr(false)}

    console.log(message)
    setReceiver("")
    setSubject("")
    setMessage("")
    clickSend()
  }
  return (
    <div id="form-main">
      
  <div id="form-div">
    <form onSubmit={(e)=>validation(e)}>
    <div id="form-Items">
  <div className="msg-form-item">
      <input
      className={`form-to ${receiverErr? 'warning' : ''}`}
      placeholder="To"
        value={receiver}
        onChange={(e) => {
          setReceiver(e.target.value);
        }}
        type="text"
      />
    </div>
      <div className="msg-form-item">
      <input
      className={`form-subject ${subjectErr? 'warning' : ''}`}
      placeholder="Subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        type="text"
      />
      </div>
      <div className="msg-form-item">
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Message"

      />
      </div>
      <div className="msg-form-item">
      <input
      className="form-submit"
      type="submit"
        value="Send"
      />
      </div>
      </div>

      </form>
    </div>
    
    </div>
  );
};
export default MessageForm;
