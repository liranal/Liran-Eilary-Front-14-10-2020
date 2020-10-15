import { makeStyles, Table, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messages, deleteFunction }) => {
  const useStyles = makeStyles({
    table: {
    },
  });
  const classes = useStyles();
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
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell align="">Subject</TableCell>
            <TableCell align="left">Time</TableCell>

          </TableRow>
        </TableHead>
        </Table>
        {renderMessages()}
      </TableContainer>
      </div>;
};

export default MessageList;
