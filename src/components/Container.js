import React, { useState, useEffect } from "react";
import List from "./List";
import Modal from "./Modal";
import BookContent from "./BookContent";
import CharacterContent from "./CharacterContent";
import HouseContent from "./HouseContent";
console.log("container render");
function Container({ item }) {
  const [showList, setShowList] = useState(false);
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(
    () =>
      fetch(`https://www.anapioficeandfire.com/api/${item.type}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.length > 0) {
            for (let i = 0; i < res.length; i++) {
              res[i].id = i + 1;
            }
          }
          setData(res);
          console.log("success!!!");
        }),
    []
  );

  // componentDidMount   () {
  //   try {
  //     fetch(`https://www.anapioficeandfire.com/api/${this.props.item.type}`)
  //      .then((res) => res.json())
  //       .then((res) => {
  // if (res.length > 0) {
  //   for (let i = 0; i < res.length; i++) {
  //     res[i].id = i + 1;
  //   }
  //           this.setState({ data: res });
  //           console.log("success!");
  //         }
  //       });
  //   } catch (err) {
  //     console.log("error fetching data", err);
  //   }
  // }

  // FUNCTIONS
  function closeList() {
    setShowList(false);
  }
  function setModalOpen() {
    setModalIsOpen(true);
  }
  function handleClick(id) {
    const selectedItem = data.filter((data) => data.id === id)[0];
    console.log(id);
    setSelectedItem(selectedItem);
    setModalIsOpen(true);
  }

  return (
    <div>
      <div>
        <p
          className="category-item-style"
          // style={{ color: this.props.item.color }}
          onClick={() => {
            setShowList(true);
          }}
        >
          {item.type}
        </p>{" "}
        <List
          closeList={closeList}
          isListOpen={showList}
          data={data}
          setModalOpen={setModalOpen}
          handleClick={handleClick}
        />{" "}
      </div>
      <div>
        {modalIsOpen && (
          <Modal data={data}>
            {item.type === "Books" && (
              <BookContent data={data} selectedItem={selectedItem} />
            )}
            {item.type === "Characters" && <CharacterContent />}
            {item.type === "Houses" && <HouseContent />}
          </Modal>
        )}
      </div>
    </div>
  );
}
export default Container;
