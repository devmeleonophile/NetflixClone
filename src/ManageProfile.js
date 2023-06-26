import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import netflixavtar from "./images/Netflix-avatar.png";
import childLogo from "./images/child_logo.png";
import "./userProfile.css";
import EditProfile from "./EditProfiles";

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
    const addNewUserProfile = [[], ...users];
    setUsers(addNewUserProfile);
  };
  useEffect(() => {
    if (users.length >= 3) {
      setShowAdd(false);
    }
  }, [users]);
  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    if (getUsers) setUsers(getUsers);
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const redirecttoEdit = () => {
    navigate("/editprofiles", {
      state: users
    });
  };
  return (
    <div className="ProfilePage">
      <div>
        <h3 className="userprof_title">Who's Watching?</h3>
      </div>
      <div className="profiles">
        {users.map((item, i) => {
          return (
            <div className="main_profile">
              <img
                className="userLogo"
                src={netflixavtar}
                alt="userProfile"
                onClick={redirector}
              />
              <h6 className="userName">Rajesh</h6>
            </div>
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
          <div className="AddingUser">
            <button className="AddUser" onClick={addUserLogo}>
              +
            </button>
            <h6 className="userName">Add User</h6>
          </div>
        )}
      </div>
      <button onClick={redirecttoEdit}>ManageProfiles</button>
    </div>
  );
}

export default ManageProfile;
