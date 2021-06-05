import React, { useState, useEffect } from "react";

console.log("rendered CharactersPerBook");
function CharactersPerBook({ selectedItem }) {
  const [listOfCharacters, setListOfCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        selectedItem.characters.map((char) =>
          fetch(char).then((res) => res.json())
        )
      );
      setListOfCharacters(result);
    };
    fetchData();
  });

  // async componentDidUpdate(prevProps) {
  //   const { selectedItem } = this.props;
  //   console.log({ selectedItem });
  //   console.log("name", this.state.name);
  //   if (prevProps.selectedItem.name !== this.props.selectedItem.name) {
  //     const characterData = await Promise.all(
  //       selectedItem.characters.map((char) =>
  //         fetch(char).then((res) => res.json())
  //       )
  //     );
  //     console.log(characterData);
  //     this.setState({
  //       listOfCharacters: characterData,
  //       name: this.props.selectedItem.name,
  //     });
  //   }
  // }

  return (
    <div className="characters-names-container">
      {listOfCharacters.map((char, index) => (
        <p key={index} className="characters-names">
          {char.name}
        </p>
      ))}
    </div>
  );
}

export default CharactersPerBook;
