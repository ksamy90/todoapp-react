import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectOption}
      onRequestClose={props.clearOption}
      contentLabel="our option"
    >
      <h3>select option</h3>
      {props.selectOption && <p>{props.selectOption}</p>}
      <button onClick={props.clearOption}>okay</button>
    </Modal>
  );
};

export default OptionModal;
