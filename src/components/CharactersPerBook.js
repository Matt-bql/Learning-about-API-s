import React from "react";
console.log("rendered CharactersPerBook");
class CharactersPerBook extends React.Component {
  state = {
    listOfCharacters: [],
    updateCharacters: false,
  };
  //loop over the characters array of a book and
  //create a promise to fetch data of that character
  //and push the promise to an array
  //take the array of promises you created from the
  //loop and use promise.all to get all the data

  async componentDidMount() {
    const { selectedItem } = this.props;
    const characterData = await Promise.all(
      selectedItem.characters.map((char) =>
        fetch(char).then((res) => res.json())
      )
    );
    console.log(characterData);
    this.setState({ listOfCharacters: characterData });
  }

  render() {
    const { listOfCharacters } = this.state;
    console.log(listOfCharacters);
    return (
      <div className="characters-names-container">
        {listOfCharacters.map((char) => (
          <p className="characters-names">{char.name}</p>
        ))}
      </div>
    );
  }
}

export default CharactersPerBook;
