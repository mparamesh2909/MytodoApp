import React from "react";
import AddtaskModal from "./AddtaskModal";
export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="content">
      <AddtaskModal cancel={close} />
    </div>
  </div>
);
