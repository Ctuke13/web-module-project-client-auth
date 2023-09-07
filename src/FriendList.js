import React from "react";
import { axiosWithAuth } from "./mocks/axiosWithAuth";

class FriendList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        console.log(res.data);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return this.state.friends.length
      ? this.state.friends.map((friend, idx) => (
          <div key={idx} className="friendlist">
            -{friend.name} -{friend.email}
          </div>
        ))
      : "NO FRIENDS FOUND";
  }
}

export default FriendList;
