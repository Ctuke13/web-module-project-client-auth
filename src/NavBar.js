import React from "react";
import { Link, Route } from "react-router-dom";
import Login from "./Login";
import FriendList from "./FriendList";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
    };
  }

  render() {
    return (
      <>
        <div className="nav-bar-container">
          <h1 className="app-name">FRIEND DATABASE</h1>
          <div className="navlinks">
            <Link to="/" className="login-button">
              LOGIN.
            </Link>
            <Link to="/friends" className="friendlist-button">
              FRIENDLIST.
            </Link>
            <Link to="/friends/add" className="add-button">
              ADD FRIEND.
            </Link>
            <Link to="/logout" className="logout-button">
              LOGOUT.
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
