import React from "react";
import MessageItem from "./MessageItem";
import MessageListHeader from "./MessageListHeader";

const MessageList = ({ messages, deleteFunction }) => {
  const renderMessages = () => {
    if (messages) {
      return messages.map((msg, index) => {
        return (
          <div>
        <MessageItem {...msg} key={index} deleteFunction={deleteFunction} />
          </div>
        );
      });
    } else {
      return <div>No messages</div>;
    }
  };

  return <div>
    <MessageListHeader/>
        {renderMessages()}
      </div>;
};

export default MessageList;
