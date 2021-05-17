import React from "react";
console.log("rendered CharactersPerBook");
class CharactersPerBook extends React.Component {
  state = {
    listOfCharacters: [],
    name: "",
  };

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
      // console.log(characterData);
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
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      "listOfCharacters",
      JSON.stringify(nextState.listOfCharacters)
    );
  }
  componentWillMount() {
    localStorage.getItem(
      "listOfCharacters" &&
        this.setState({
          listOfCharacters: JSON.parse(
            localStorage.getItem("listOfCharacters")
          ),
        })
    );
  }

  render() {
    const { listOfCharacters } = this.state;
    // console.log(listOfCharacters);
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
