import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectOption}
      onRequestClose={props.clearOption}
      contentLabel="our option"
      closeTimeoutMS={1000}
      className="modal"
    >
      <h3 className="modal__title">select option</h3>
      {props.selectOption && (
        <p className="modal__body">{props.selectOption}</p>
      )}
      <button className="button" onClick={props.clearOption}>
        okay
      </button>
    </Modal>
  );
};

export default OptionModal;
