import { useState } from "react";
import { FaX } from "react-icons/fa6";

import { FaRegWindowMaximize } from "react-icons/fa";

function ActionBanner() {
  const [offer, setOffer] = useState(true);
  const [window, setWindow] = useState(true);

  function handleWindow() {
    setWindow(!window);
  }

  function handleOffer() {
    setOffer(!offer);
  }

  return (
    <div
      className={` ${offer ? "relative flex items-center justify-between bg-gradient-to-r from-blue-600 to-orange-400 px-20 py-4 font-semibold" : "relative flex items-center justify-end bg-gradient-to-r from-blue-600 to-orange-400 px-20 py-4 font-semibold"}`}
    >
      {window ? (
        <>
          {offer && <p>Get 20% OFF on Your First Order!</p>}
          <div className="flex items-center gap-4">
            <button
              onClick={handleOffer}
              className="rounded-full bg-white px-5 py-2 font-medium transition-all duration-200 hover:bg-black hover:text-white"
            >
              {offer ? "Claim Offer" : "Congrts 🎉"}
            </button>
            <FaX onClick={handleWindow} className="text-white" />
          </div>
        </>
      ) : (
        <FaRegWindowMaximize
          onClick={handleWindow}
          className="absolute top-3 right-20 text-lg text-white"
        />
      )}
    </div>
  );
}

export default ActionBanner;
