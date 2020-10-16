import Modal from "../Context/ModalContext";
import React from "react";

const CompoundComponentsExample = () => {
  return (
    <Modal>
      <Modal.Header title={"Modal title"} />
      <Modal.Content />
      <Modal.Footer callToAction={"Call to action"} />
    </Modal>
  );
};

export default CompoundComponentsExample;
