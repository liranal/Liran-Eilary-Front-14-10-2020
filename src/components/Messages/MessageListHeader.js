import { Accordion, AccordionSummary, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const MessageListHeader = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: "90%",
            marginLeft: "5%",
          backgroundColor: "black",
          color: "white"
        },
        fromHeading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: "15%",
          flexShrink: 0,
        },
        toHeading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: "15%",
          flexShrink: 0,
        },
        subjectHeading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: "15%",
          flexShrink: 0,
        },
      }));
  const classes = useStyles();
  return <div>
          <Accordion disabled  className={classes.root}>
<AccordionSummary>
  <Typography className={classes.fromHeading}>From</Typography>
  <Typography className={classes.toHeading}>To</Typography>
  <Typography className={classes.subjectHeading}>Subject</Typography>
  <Typography className={classes.subjectHeading}>Date</Typography>
</AccordionSummary>
</Accordion>
      </div>;
};

export default MessageListHeader;
