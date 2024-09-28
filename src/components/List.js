const List = (props) => {
  const { data, isListOpen, closeList, handleClick } = props;

  if (!isListOpen) {
    return null;
  }

  return (
    <div className="list-container-parent">
      <div className="list-container">
        <button onClick={closeList}>Close</button>
        {data.map((d) => {
          return (
            <div key={d.name}>
              <p className="list" onClick={() => handleClick(d.id)}>
                {d.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List;
