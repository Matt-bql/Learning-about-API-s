import React from "react";
import Container from "./components/Container";
import "./scss/stylereset.scss";
import "./scss/style.scss";
console.log("render");
class App extends React.Component {
  state = {};
  render() {
    const arr = [
      { type: "Books", id: 1 },
      // { type: "Characters", id: 2 },
      // { type: "Houses", id: 3 },
    ];

    return (
      <div className="body-container">
        <div className="category-container">
          {arr.map((item) => {
            return (
              <div key={item.id} className="category-style">
                <Container item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
