import React, { useState } from "react";
import Modal from "./Modal";
// import ListType from "./ListType";

const List = (props) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const { data, isListOpen, closeList } = props;
  // const { isModalOpen, closeModal } = props;
  //isModalOpen={showModal}
  // closeModal={() => {
  //   this.setState({ showModal: false });
  // }}
  // function closeList() {
  //   this.setState({ isListOpen: false });
  // }
  if (!isListOpen) {
    return null;
  }
  return (
    <div>
      {data.map((d) => {
        return (
          <div className="List-container" key={d.name}>
            <p
              className="isClickablePointer"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {d.name}
            </p>
            {modalIsOpen && <Modal setModalOpen={setModalOpen} />}
          </div>
        );
      })}

      <button onClick={closeList} data={data}>
        Close
      </button>
    </div>
  );
};
export default List;
