import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import netflixavtar from "./images/Netflix-avatar.png";
import childLogo from "./images/child_logo.png";
import "./userProfile.css";

function ManageProfile() {
  const [users, setUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(true);
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/home");
  };
  const redirectChild = () => {
    navigate("/children");
  };
  const addUserLogo = () => {
    const addNewUserProfile = [...users, []];
    setUsers(addNewUserProfile);
  };
  useEffect(() => {
    if (users.length >= 2) {
      setShowAdd(false);
    }
  }, [users]);
  // useEffect(() => {
  //   const getUsers = JSON.parse(localStorage.getItem("users"));
  //   if (getUsers) setUsers(getUsers);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);

  return (
    <div className="ProfilePage">
      <div>
        <h3 className="userprof_title">Who's Watching?</h3>
      </div>
      <div className="profiles">
        <div className="main_profile">
          <img
            className="userLogo"
            src={netflixavtar}
            alt="userProfile"
            onClick={redirector}
          />
          <h6 className="userName">Rajesh</h6>
        </div>
        {users.map((item, i) => {
          return (
            i < 2 && (
              <div className="main_profile">
                <img
                  className="userLogo"
                  src={netflixavtar}
                  alt="userProfile"
                  onClick={redirector}
                />
                <h6 className="userName">Rajesh</h6>
              </div>
            )
          );
        })}

        <div className="children_profile">
          <img
            className="userLogo"
            src={childLogo}
            alt="childProfile"
            onClick={redirectChild}
          />
          <h6 className="userName">children</h6>
        </div>
        {showAdd && (
          <div>
            <button className="AddUser" onClick={addUserLogo}>
              +
            </button>
            <h6 className="userName">Add User</h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageProfile;
