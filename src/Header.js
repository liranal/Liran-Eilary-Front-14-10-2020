import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { IconButton, makeStyles, Button, CssBaseline } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faInbox,
  faPaperPlane,
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
    backgroundColor: " rgba(47, 185, 219, 0.2)",
    color: "black",
    height: "3.3rem",
    alignContent: "center",
    boxSizing: "border-box",
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
      <CssBaseline>
      <AppBar className={classes.header}>
        <Toolbar>
          {isSignedIn ? (
            <div>
              <IconButton>
                <StyledLink to="/Inbox">
                  <FontAwesomeIcon icon={faInbox} />
                  <label></label>
                </StyledLink>
              </IconButton>
              <IconButton>
                <StyledLink to="/NewMessage">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <label></label>
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
      </CssBaseline>
    </div>
  );
};

export default Header;
