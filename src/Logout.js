import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (!token) {
    setTimeout(() => {
      history.push("/");
    }, 2000);
    return <div>User must log in</div>;
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    axios
      .post("http://localhost:9000/api/logout", {}, config)
      .then(() => {
        if (localStorage.token) {
          localStorage.removeItem("token");
          history.push("/");
        } else {
          history.push("/");
        }
      })
      .catch((err) => {
        console.error("Error during Logout:", err);
      });
  }, []);

  return <div>Logging out...</div>;
};

export default Logout;
