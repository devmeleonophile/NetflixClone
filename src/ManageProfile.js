import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixavtar from "./images/Netflix-avatar.png";
import childLogo from "./images/child_logo.png";
import "./userProfile.css";

function ManageProfile() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/home");
  };
  const redirectChild = () => {
    navigate("/children");
  };
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
        <div className="children_profile">
          <img
            className="userLogo"
            src={childLogo}
            alt="childProfile"
            onClick={redirectChild}
          />
          <h6 className="userName">children</h6>
        </div>
        <div>
          <button className="AddUser">+</button>
          <h6 className="userName">Add User</h6>
        </div>
      </div>
    </div>
  );
}

export default ManageProfile;
