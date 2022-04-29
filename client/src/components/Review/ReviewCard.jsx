import React, { useState } from "react";
import Modal from "./ReviewModal";

export default function ReviewCard() {
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
    <div
      className="flex flex-col h-96 w-64 relative overflow-hidden rounded-2xl"
      onClick={toggleModal}
    >
      <video
        className="btn-modal w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="Assets/video/sermad.mp4"
        type="video/mp4"
      />
      <div className="absolute w-full h-full bg-gray-900/10"></div>
      <div className="absolute w-full h-full flex-col">
        <div className="items-center flex ml-3 mt-2">
          <div className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="Assets/images/sermad.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-m font-bold text-white -mt-1 -mb-1">
                  Sermad Alladin
                </p>
                <p className="text-sm font-medium text-gray-50">
                  Elgiganten • 18 t.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-end self-end flex h-[20.5rem]">
          <div className="flex">
            <div className="font-normal text-white leading-5">
              <div class="flex items-center ml-2">
                <p class="bg-primary text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
                  8.7
                </p>
                <p class="ml-2 font-medium text-white">Excellent</p>
              </div>
              <div className="h-full w-full px-2 pt-2 bg-gradient-to-t from-black/100 to-black/0">
                <p>Amazing customer service, but i wish was better...😉</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && <Modal toggleModal={toggleModal} />}
    </div>
  );
}
