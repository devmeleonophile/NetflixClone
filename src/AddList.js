import React, { useEffect, useMemo, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import "./AddList.css";

const url = "https://image.tmdb.org/t/p/original/";

function AddList() {
  const location = useLocation();
  const navigate = useNavigate();

  const value = location.state.value.poster_path;
  console.log(value);

  const [items, setItems] = useState(value);

  const deleteList = () => {
    setItems("");
  };
  const redirect = () => {
    navigate("/home");
  };
  return (
    <div>
      <img className="List_rows" src={`${url}${value}`} alt="List_image" />
      <button onClick={() => redirect()}>Home</button>
      <button onClick={() => deleteList()}>Delete</button>
    </div>
  );
}

export default AddList;
