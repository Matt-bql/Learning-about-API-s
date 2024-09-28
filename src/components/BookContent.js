import React from "react";
import CharactersPerBook from "./CharactersPerBook";
console.log("rendered bookcontent!");
function BookContent({ selectedItem }) {
  console.log("bookcontent!!", selectedItem);

  return (
    <div className="modal-content-container">
      <div className="title-releaseddate-container">
        <h2 className="modal-booktitle">{selectedItem.name}</h2>
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
