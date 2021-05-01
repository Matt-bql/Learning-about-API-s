import React from "react";

function BookContent({ data, filt }) {
  return (
    <div>
      {data.map((d) => (
        <div>{d.name}</div>
      ))}
    </div>
  );
}
export default BookContent;
