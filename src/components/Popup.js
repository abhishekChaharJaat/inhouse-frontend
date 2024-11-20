import React from "react";
import Form from "./Form";
const Popup = (props) => {
  return (
    <div className="fixed mx-auto w-full h-full bg-black/40 flex justify-center items-center">
      <Form closePopup={props.closePopup} />
    </div>
  );
};

export default Popup;
