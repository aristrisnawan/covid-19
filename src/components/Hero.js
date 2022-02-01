import React from "react";
import ReactTypingEffect from "react-typing-effect";
import mask from "../images/mask.png";
import wash from "../images/washing.png";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-blue-500">
      <div>
        <h1 className="text-center text-white text-3xl font-bold pt-20">
          AYO LAWAN COVID-19
        </h1>
        <div className="flex flex-row justify-center">
          <ReactTypingEffect
            className="text-center text-white text-3xl font-bold"
            speed="100"
            eraseSpeed="100"
            typingDelay="1500"
            eraseDelay="1000"
            text={["Tetap Pakai Masker", "Mencuci Tangan", "Hindari Kerumunan"]}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between px-10">
        <div>
          <img src={mask} alt="" />
        </div>
        <div>
          <img src={wash} alt="" />
        </div>
      </div>
    </div>
  );
}
