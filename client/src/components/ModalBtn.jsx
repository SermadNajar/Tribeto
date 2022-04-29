import React, { useState } from "react";
import Modal from "../components/Modal";

function ModalButton() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal"
        class="block text-gray-900 dark:text-white font-bold rounded-lg text-sm px-5 py-2 text-center"
        type="button"
      >
        Login
      </button>
      {modal && <Modal toggleModal={toggleModal} />}
    </>
  );
}

export default ModalButton;
