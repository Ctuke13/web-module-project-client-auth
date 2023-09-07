import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import Nav from "./NavBar";
import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import PrivateRoute from "./PrivateRoute";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Login} />
      <Route exact path="/friends" component={FriendList} />
      <PrivateRoute path="/friends/add" component={AddFriend} />
      <Route path="/logout" component={Logout} />
    </div>
  );
}

export default App;
