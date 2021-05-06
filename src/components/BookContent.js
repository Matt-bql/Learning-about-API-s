import React from "react";

function BookContent({ selectedItem }) {
  return (
    <div>
      <h2>{selectedItem.name}</h2>
      <h4>Release Date: {selectedItem.released}</h4>
      <p>{selectedItem.characters}</p>
    </div>
  );
}
export default BookContent;
