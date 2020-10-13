import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_message, fetch_messages } from "../../actions";
import AbsoluteWrapeer from "../../route/AbsoluteWrapper";
import MessageList from "../Messages/MessageList";
const InboxPage = () => {
  const userId = useSelector((state) => state.auth.userId);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_messages(userId));
  }, [userId, dispatch]);

  const deleteFunc = (id) => {
    dispatch(delete_message(id));
  };
  return (
    <AbsoluteWrapeer>
      <div>
        <MessageList messages={messages} deleteFunction={deleteFunc} />
      </div>
    </AbsoluteWrapeer>
  );
};

export default InboxPage;
