import React, { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const [names, setName] = useState("");
  const [text, setText] = useState(names);

  props.func(names);
  return (
    <div className="Modal_class">
      <input value={names} onChange={(e) => setName(e.target.value)}></input>
      <button
        onClick={() => {
          props.handleClick();
        }}
      >
        AddUser
      </button>
    </div>
  );
}

export default Modal;
