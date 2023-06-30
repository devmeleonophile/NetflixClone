import React, { useState, useEffect } from "react";
import netflixavtar from "./images/Netflix-avatar.png";
import childLogo from "./images/child_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditProfiles.css";

function EditProfile(props) {
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const locationObj = location.state;
  const [users, setUsers] = useState(locationObj);

  const deleteUser = (index) => {
    const items = [...users];
    items.splice(index, 1);
    setUsers(items);
  };

  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    if (getUsers) setUsers(getUsers);
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const goBackToProfiles = () => {
    navigate("/");
  };

  return (
    <>
      <div className="EditProfiles">
        {users.map((item, index) => {
          return (
            <>
              <div className="main_profile">
                <img
                  className="userLogo"
                  src={netflixavtar}
                  alt="userProfile"
                />
                <h6 className="userName">Rajesh</h6>
                <button
                  className="delete_Button"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}

        <div className="children_profile">
          <img className="userLogo" src={childLogo} alt="childProfile" />
          <h6 className="userName">children</h6>
          <button className="delete_Button">Edit</button>
        </div>
        <div className="GoBack">
          <button className="homeButton" onClick={goBackToProfiles}>
            GO Back
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
