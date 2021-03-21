import React from "react";
import Container from "./components/Container";

import "./styles/stylereset.css";
import "./styles/style.css";
console.log("render");
class App extends React.Component {
  state = {};
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
            <div>
              {arr.map((item) => {
                return (
                  <div className="category-style">
                    <Container item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default App;
