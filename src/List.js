import React from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  return (
    <div>
      HI there! this is my wishList!
      <button onClick={() => navigate("/")}>Go back to Home</button>
    </div>
  );
}

export default List;
