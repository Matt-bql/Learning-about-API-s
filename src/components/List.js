import React from "react";
// import Modal from "./Modal";
// import ListType from "./ListType";
//import "./css/App.css";
//import App from "./App.js";

const List = (props) => {
  const { data } = props;

  return (
    //anything inside the open tag of <ListType--->gets passed
    //along as a children prop.
    <div>
      {data.map((d) => {
        return (
          <div className="modal-container">
            <p onClick={console.log(d)} key={d.name}>
              {d.name}
            </p>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};
export default List;

// 1. if li is an ordered list then it will look at List.js
// 2. List.js will map over the name value of whichever endpoint is needed
//        and return '<li>{d.name}</li>'.
// 3. List.js passes the return value of data.map (<li>{d.name}</li>) to
//        ListType.js(as well as the variable 'isOrdered' which is equal to
//        false in this component.).
// 4. ListType.js will then look at the value of child prop**** 'isOrdered' and will return the
