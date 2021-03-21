import React from "react";
import List from "./List";
import Modal from "./Modal";

class Container extends React.Component {
  state = { showModal: false, data: [] };

  onClickFetchHandler = () => {
    try {
      if (this.state.data.length === 0) {
        fetch(`https://www.anapioficeandfire.com/api/${this.props.item.type}`)
          .then((res) => res.json())
          .then((res) => {
            this.setState({ data: res });
            console.log("success");
          });
      }

      this.setState({ showModal: !this.state.showModal });
    } catch (err) {
      console.log("error fetching data", err);
    }
  };

  render() {
    const { showModal, data } = this.state;
    return (
      <div>
        <div>
          <p
            className="isClickablePointer"
            style={{ color: this.props.item.color }}
            onClick={this.onClickFetchHandler}
          >
            {this.props.item.type}
          </p>

          <Modal
            isModalOpen={showModal}
            closeModal={() => {
              this.setState({ showModal: false });
            }}
          >
            {" "}
            <List data={data} />{" "}
          </Modal>
        </div>
      </div>
    );
  }
}
export default Container;
