import React from "react";
import { useDispatch } from "react-redux";
import { send_message } from "../../actions";
import MessageForm from "../Messages/MessageForm/MessageForm";

const SendMessagePage = () => {
  const dispatch = useDispatch()
  const SendMessageFunc = (msgObj) => {
    dispatch(send_message(msgObj));
  };
  return (
    <div>
      <MessageForm SendFunc={SendMessageFunc} />
    </div>
  );
};

export default SendMessagePage;
