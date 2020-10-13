import React, { useState } from "react";
import { Button, Input, TextareaAutosize } from "@material-ui/core";

const MessageForm = ({ SendFunc }) => {
  const [To, setTo] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const clickSend = () => {
    let messageObj = {
      To,
      Subject,
      Message,
      Date: new Date(),
    };
    SendFunc(messageObj);
  };
  return (
    <div className="ui container">
      <label>To: </label>
      <Input
        value={To}
        onChange={(e) => {
          setTo(e.target.value);
        }}
        type="text"
      />
      <label>Subject: </label>
      <Input
        value={Subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        type="text"
      />
      <label>Message:</label>
      <TextareaAutosize
        value={Message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        aria-label="empty textarea"
        placeholder=""
      />
      <Button
        onClick={() => {
          clickSend();
        }}
      >
        Send
      </Button>
    </div>
  );
};
export default MessageForm;
