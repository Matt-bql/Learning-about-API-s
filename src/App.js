import React from "react";
import Container from "./components/Container";
import Modal from "./components/Modal";
import "./styles/stylereset.css";
import "./styles/style.css";

class App extends React.Component {
  state = { isModalOpen: false };
  render() {
    const arr = [
      { type: "Books", color: "blue" },
      { type: "Characters", color: "red" },
      { type: "Houses", color: "purple" },
    ];
    return (
      <div className="body-container">
        <>
          <div className="category-container">
            <Modal
              isModalOpen={true}
              closeModal={() => {
                this.setState({ isModalOpen: false });
              }}
            >
              <div>
                {arr.map((item) => {
                  return (
                    <div className="category-style">
                      <Container options={item} />
                    </div>
                  );
                })}
              </div>
              asdf
            </Modal>
          </div>
        </>
      </div>
    );
  }
}

export default App;
