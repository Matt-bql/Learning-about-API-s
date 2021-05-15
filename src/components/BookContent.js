import React from "react";
import CharactersPerBook from "./CharactersPerBook";

function BookContent({ selectedItem }) {
  console.log(selectedItem);

  return (
    <div className="modal-content-container">
      <div className="title-releaseddate-container">
        <h2>{selectedItem.name}</h2>
        <h4>Release Date: {selectedItem.released}</h4>
      </div>
      <div>
        <h3 className="character-name-intro">
          Characters in {selectedItem.name}:{" "}
        </h3>
        <CharactersPerBook selectedItem={selectedItem} />
      </div>
    </div>
  );
}
export default BookContent;
