import React from "react";
import List from "./List";
import Modal from "./Modal";
class Container extends React.Component {
  state = { showList: false, data: [], isModelOpen: false };

  componentDidMount() {
    try {
      fetch(`https://www.anapioficeandfire.com/api/${this.props.item.type}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ data: res });
          console.log("success");
        });
    } catch (err) {
      console.log("error fetching data", err);
    }
  }
  closeList = () => {
    this.setState({ showList: false });
  };
  // onClickFetchHandler = () => {
  //   try {
  //     if (this.state.data.length === 0) {
  //       fetch(`https://www.anapioficeandfire.com/api/${this.props.item.type}`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           this.setState({ data: res });
  //           console.log("success");
  //         });
  //     }

  //     this.setState({ showModal: !this.state.showModal });
  //   } catch (err) {
  //     console.log("error fetching data", err);
  //   }
  // };

  render() {
    const { showList, data, isModalOpen } = this.state;
    return (
      <div>
        <div>
          <p
            className="isClickablePointer"
            style={{ color: this.props.item.color }}
            onClick={() => {
              this.setState({ showList: true });
            }}
          >
            {this.props.item.type}
          </p>{" "}
          <List closeList={this.closeList} isListOpen={showList} data={data} />{" "}
        </div>
      </div>
    );
  }
}
export default Container;
