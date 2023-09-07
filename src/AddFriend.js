import React from "react";
import axios from "axios";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        email: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .post("http://localhost:9000/api/friends", this.state.friend, config)
      .then((res) => {
        this.props.history.push("/friends");
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <>
        <h1>ADD FRIEND</h1>
        <form onSubmit={this.addFriend} className="add-friend-form">
          <div className="friend-name-container">
            <label htmlFor="name">FRIEND NAME</label>&nbsp;
            <input
              name="name"
              type="text"
              value={this.state.friend.friendName}
              onChange={this.handleChange}
              placeholder="Friend Name"
            />
          </div>
          <br />
          <div className="friend-email-container">
            <label htmlFor="email">PASSWORD</label>&nbsp;
            <input
              name="email"
              type="email"
              value={this.state.friend.friendEmail}
              onChange={this.handleChange}
              placeholder="Friend Email"
            />
          </div>
          <br />
          <button>Add Friend</button>
        </form>
      </>
    );
  }
}

export default AddFriend;
