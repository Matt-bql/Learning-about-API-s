const List = (props) => {
  // const [modalIsOpen, setModalOpen] = useState(false);
  const { data, isListOpen, closeList, setModalOpen } = props;
  // const { isModalOpen, closeModal } = props;
  //isModalOpen={showModal}
  // closeModal={() => {
  //   this.setState({ showModal: false });
  // }}
  // function closeList() {
  //   this.setState({ isListOpen: false });
  // }
  if (!isListOpen) {
    return null;
  }

  return (
    <div>
      {data.map((d) => {
        return (
          <div className="List-container" key={d.name}>
            <p className="isClickablePointer" onClick={setModalOpen}>
              {d.name}
            </p>
            {/* {modalIsOpen && (
              <Modal setModalOpen={setModalOpen}>
                {type === "Books" && <BookContent data={data} />}
                {type === "Characters" && <CharacterContent data={data} />}
                {type === "Houses" && <HouseContent data={data} />}
              </Modal>
            )} */}
          </div>
        );
      })}

      <button onClick={closeList} data={data}>
        Close
      </button>
    </div>
  );
};
export default List;
