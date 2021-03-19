import React from "react";
// import List from "./List.js";
//import "./css/App.css";

function Modal({ isModalOpen, children, closeModal }) {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div>
      {children} <button onClick={closeModal}>Back </button>
    </div>
  );
}
export default Modal;
