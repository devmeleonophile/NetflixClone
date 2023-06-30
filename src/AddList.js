import React, { useEffect, useMemo, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import "./AddList.css";

const url = "https://image.tmdb.org/t/p/original/";

function AddList() {
  const location = useLocation();
  const navigate = useNavigate();

  const value = location.state.value;

  const [items, setItems] = useState(value);

  const redirect = () => {
    navigate("/home");
  };

  const removeItem = (index) => {
    const deleteItem = [...items];

    deleteItem.splice(index, 1);
    setItems(deleteItem);
  };

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div>
            <h2>{item}</h2>
            {item !== null && (
              <button
                onClick={() => {
                  removeItem(index);
                }}
              >
                Remove
              </button>
            )}
          </div>
        );
      })}
      {/* <img className="List_rows" src={`${url}${value}`} alt="List_image" /> */}
      <button onClick={() => redirect()}>Home</button>
    </div>
  );
}

export default AddList;
