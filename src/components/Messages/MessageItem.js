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
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    color: theme.palette.text.secondary,
  },
  tricianoryHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "10%",
    flexShrink: 0,
    color: theme.palette.text.secondary,
  },
}));

const MessageItem = ({
  _id,
  Sender,
  Receiver,
  Message,
  Date,
  Subject,
  deleteFunction,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          <Typography className={classes.heading}>{Sender}</Typography>
          <Typography className={classes.secondaryHeading}>
            {Subject}
          </Typography>
          <Typography className={classes.tricianoryHeading}>{Date}</Typography>
          <Button
            onClick={() => {
              deleteFunction(_id);
            }}
            className={classes.tricianoryHeading}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{Message}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MessageItem;
