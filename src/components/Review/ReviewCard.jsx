import React from "react";

export default function Example() {
  return (
    <div className="flex flex-col h-96 w-64 relative overflow-hidden rounded-2xl">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="Assets/img/video/test.mp4"
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
                  src="Assets/img/images/sermad.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-m font-bold text-white -mt-1 -mb-1">Sermad Alladin</p>
                <p className="text-sm font-medium text-gray-50">
                  Elgiganten • 18 t.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-end self-end flex mt-64">
          <div className="flex ml-2">
            <p className="font-normal text-white h-12 leading-5">
              Amazing customer service, but i wish was better...😉
            </p>
          </div>
          <div className="items-center flex h-7 p-4 bg-primary rounded-tl-xl rounded-bl-xl">
            <div className="font-bold mx-2 text-white">87</div>
          </div>
        </div>
      </div>
    </div>
  );
}
