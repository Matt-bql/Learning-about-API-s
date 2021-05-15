import React from "react";
console.log("rendered CharactersPerBook");
class CharactersPerBook extends React.Component {
  state = {
    listOfCharacters: [],
    name: "",
  };
  //loop over the characters array of a book and
  //create a promise to fetch data of that character
  //and push the promise to an array
  //take the array of promises you created from the
  //loop and use promise.all to get all the data

  async componentDidMount() {
    const { selectedItem } = this.props;
    console.log({ selectedItem });
    console.log("name", this.state.name);
    if (selectedItem.name !== this.state.name) {
      const characterData = await Promise.all(
        selectedItem.characters.map((char) =>
          fetch(char).then((res) => res.json())
        )
      );
      console.log(characterData);
      this.setState({
        listOfCharacters: characterData,
        name: this.props.selectedItem.name,
      });
    }
  }
  async componentDidUpdate(prevProps) {
    const { selectedItem } = this.props;
    console.log({ selectedItem });
    console.log("name", this.state.name);
    if (prevProps.selectedItem.name !== this.props.selectedItem.name) {
      const characterData = await Promise.all(
        selectedItem.characters.map((char) =>
          fetch(char).then((res) => res.json())
        )
      );
      console.log(characterData);
      this.setState({
        listOfCharacters: characterData,
        name: this.props.selectedItem.name,
      });
    }
  }

  render() {
    const { listOfCharacters } = this.state;
    console.log(listOfCharacters);
    return (
      <div className="characters-names-container">
        {listOfCharacters.length > 0 &&
          listOfCharacters.map((char, index) => (
            <p key={index} className="characters-names">
              {char.name}
            </p>
          ))}
      </div>
    );
  }
}

export default CharactersPerBook;
