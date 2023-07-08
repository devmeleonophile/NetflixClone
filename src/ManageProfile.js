import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixavtar from "./images/Netflix-avatar.png";
import childLogo from "./images/child_logo.png";
import "./userProfile.css";
import EditProfile from "./EditProfiles";
import Modal from "./Modal";

function ManageProfile() {
  const [users, setUsers] = useState([]);
  const [modal, showModal] = useState(false);
  const [showAdd, setShowAdd] = useState(true);
  const [names, setNames] = useState("");
  const pull_data = (data) => {
    setNames(data);
  };

  const navigate = useNavigate();
  const redirector = () => {
    navigate("/home");
  };
  const redirectChild = () => {
    navigate("/children");
  };
  const addUserLogo = () => {
    showModal(!modal);
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
  ///Modal button Function
  const handleClick = () => {
    if (names) {
      const addNewUserProfile = [[], ...users];
      setUsers(addNewUserProfile);
      showModal(false);
      console.log("function called");
    } else {
      alert("enter the name");
    }
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
              <h6 className="userName">{names}</h6>
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
      <button className="manage-Button" onClick={redirecttoEdit}>
        ManageProfiles
      </button>
      {modal && <Modal func={pull_data} handleClick={handleClick} />}
    </div>
  );
}

export default ManageProfile;
