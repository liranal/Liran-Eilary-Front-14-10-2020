import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { Switch } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import PrivateRoute from "../route/PrivateRoute";
import PublicRoute from "../route/PublicRoute";
import { animated, useTransition } from "react-spring";
import { __RouterContext, withRouter } from "react-router";
import Header from "./Header";
import { clearError, clearMessages, logout } from "../actions";
import InboxPage from "./containers/InboxPage";
import SendMessagePage from "./containers/SendMessagePage";
import Popup from "./Popup";
const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const openPopupErr = useSelector((state) => state.errors.err);
  const openPopupNote = useSelector((state) => state.errors.note);
  const msgErr = useSelector((state) => state.errors.msg);

  const { location } = useContext(__RouterContext);
  const dispatch = useDispatch();

  const closePopEvent = () => {
    dispatch(clearError())
  } 

  const trans = useTransition(location, location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const logOutEvent = () => {
    dispatch(logout());
    dispatch(clearMessages())
  };

  return (
    <div className="Container">
      <main className="container-fluid">
        <Header isSignedIn={isSignedIn} logoutEvent={logOutEvent} />
        {trans.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <PublicRoute
                path="/"
                component={LoginPage}
                exact={true}
                isSignedIn={isSignedIn}
              />
              <PrivateRoute
                path="/Inbox"
                component={InboxPage}
                exact={true}
                isSignedIn={isSignedIn}
              />
              <PrivateRoute
                path="/NewMessage"
                exact={true}
                component={SendMessagePage}
                isSignedIn={isSignedIn}
              />
            </Switch>
          </animated.div>
        ))}
      </main>
      <Popup msg={msgErr} handleClose={closePopEvent} note={openPopupNote} err={openPopupErr} />
    </div>
  );
};

export default withRouter(App);
