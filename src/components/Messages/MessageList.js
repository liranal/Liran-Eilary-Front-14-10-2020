import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messages, deleteFunction }) => {
  const renderMessages = () => {
    if (messages) {
      return messages.map((msg, index) => {
        console.log(msg);
        return (
          <MessageItem {...msg} key={index} deleteFunction={deleteFunction} />
        );
      });
    } else {
      return <div>No messages</div>;
    }
  };

  return <div>{renderMessages()}</div>;
};

export default MessageList;
