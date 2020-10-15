import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginLeft: "5%",
    opacity: "0.9"
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
    color: theme.palette.text.secondary,
  },
  subjectHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "15%",
    flexShrink: 0,
    color: theme.palette.text.secondary,
  },
}));

const leadingZeroes = (n) =>{
  if(n <= 9){
    return "0" + n;
  }
  return n
}


const MessageItem = ({
  _id,
  Sender,
  Receiver,
  Message,
  Date: date,
  Subject,
  deleteFunction,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let convertDate = new Date(date);
  return (
    <div className={classes.root}>
      <Accordion
expanded={expanded === "panel1"}
onChange={handleChange("panel1")}
>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
>
  <Typography className={classes.fromHeading}>{Sender}</Typography>
  <Typography className={classes.toHeading}>
    {Receiver}
  </Typography>
  <Typography className={classes.subjectHeading}>
    {Subject}
  </Typography>
  <Typography className={classes.subjectHeading}>{
  leadingZeroes(convertDate.getDate()) + "/" +
  leadingZeroes(convertDate.getMonth()) + "/" + 
  leadingZeroes(convertDate.getYear()) + "\n" + 
  leadingZeroes(convertDate.getHours()) + ":" + 
  leadingZeroes(convertDate.getMinutes())}</Typography>
  <Button
    onClick={() => {
      deleteFunction(_id);
    }}
    className={classes.subjectHeading}
  >
    <FontAwesomeIcon icon={faTrash} />
  </Button>
</AccordionSummary>
<AccordionDetails>
  <pre>
  <Typography>{Message}</Typography>
  </pre>
</AccordionDetails>
</Accordion>
    </div>
  );
};

export default MessageItem;
