import React from "react";
import MessageForm from "../Messages/MessageForm/MessageForm";

const SendMessagePage = () => {
  const SendMessageFunc = (msgObj) => {
    console.log(msgObj);
  };
  return (
    <div>
      <MessageForm SendFunc={SendMessageFunc} />
    </div>
  );
};

export default SendMessagePage;
