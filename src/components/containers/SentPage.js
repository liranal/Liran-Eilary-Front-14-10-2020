import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_message, fetch_messages } from "../../actions";
import AbsoluteWrapeer from "../../route/AbsoluteWrapper";
import MessageList from "../Messages/MessageList";
const SentPage = () => {
  const userId = useSelector((state) => state.auth.userId);
  const SentMessages = useSelector((state) =>
    state.messages.filter((msg) => {
      return msg.Sender !== userId;
    })
  );
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
        <MessageList messages={SentMessages} deleteFunction={deleteFunc} />
      </div>
    </AbsoluteWrapeer>
  );
};

export default SentPage;
