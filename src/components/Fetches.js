import React from "./react";

class Fetches extends React.Component {
  state = { data: [] };
  componentDidMount() {
    try {
      fetch("https://www.anapioficeandfire.com/api/books/1")
        .then((res) => res.json())
        .then((res) => {
          this.setState({ data: res });
          console.log("success");
        });
    } catch (err) {
      console.log("error fetching data", err);
    }
  }
  render() {
    const { data } = this.state;
    return <div>{data}</div>;
  }
}

export default Fetches;
