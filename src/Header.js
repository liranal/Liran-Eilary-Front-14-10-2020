import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { IconButton, makeStyles, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faInbox,
  faPaperPlane,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

const StyledLink = styled(Link)`
  & {
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "transparent",
    color: "black",
    marginBottom: "1em",
    textDecoration: "none",
  },
  authButton: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
  },
}));

const Header = ({ isSignedIn, logoutEvent }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative" className={classes.header}>
        <Toolbar>
          {isSignedIn ? (
            <div>
              <IconButton>
                <StyledLink to="/Inbox">
                  <FontAwesomeIcon icon={faInbox} />
                  <label>Inbox</label>
                </StyledLink>
              </IconButton>
              |
              <IconButton>
                <StyledLink to="/Sent">
                  <FontAwesomeIcon icon={faShareSquare} />
                  <label>Sent</label>
                </StyledLink>
              </IconButton>
              |
              <IconButton>
                <StyledLink to="/NewMessage">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <label>New Message</label>
                </StyledLink>
              </IconButton>
            </div>
          ) : null}
          <div>
            {isSignedIn ? (
              <Button
                className={classes.authButton}
                onClick={() => logoutEvent()}
              >
                <StyledLink to="/">Log out</StyledLink>
              </Button>
            ) : (
              <Button className={classes.authButton}>
                <StyledLink to="/">Log In</StyledLink>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
