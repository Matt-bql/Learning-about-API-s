import React from "react";
import CharactersPerBook from "./CharactersPerBook";

function BookContent({ selectedItem }) {
  console.log(selectedItem);

  return (
    <div>
      <h2>{selectedItem.name}</h2>
      <h4>Release Date: {selectedItem.released}</h4>
      <p>
        {selectedItem.characters}

        <CharactersPerBook selectedItem={selectedItem} />
      </p>
    </div>
  );
}
export default BookContent;
