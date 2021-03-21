import React from "react";
import Container from "./components/Container";
import Modal from "./components/Modal";
import './styles/stylereset.css'

class App extends React.Component {
  state = { isModalOpen: false };
  render() {
    const arr = [
      { type: "Books", color: "blue" },
      { type: "Characters", color: "red" },
      { type: "Houses", color: "purple" }
    ];
    return (
      <div>
        <>
          <div>
            <Modal
              isModalOpen={true}
              closeModal={() => {
                this.setState({ isModalOpen: false });
              }}
            >
              <div>
                {arr.map((item) => {
                  return (
                    <div>
                      <Container options={item} />
                    </div>
                  );
                })}
              </div>
            </Modal>
          </div>
        </>
      </div>
    );
  }
}

export default App;
