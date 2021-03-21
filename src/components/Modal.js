import React from "react";
// import List from "./List.js";

function Modal({ isModalOpen, children, closeModal }) {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div>
      {children} <button onClick={closeModal}> Back</button>
    </div>
  );
}
export default Modal;
