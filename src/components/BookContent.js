import React from "react";

function BookContent({ data, filt }) {
  return (
    <div>
      {data.map((d) => (
        <div key={d.name}>{d.name}</div>
      ))}
    </div>
  );
}
export default BookContent;
