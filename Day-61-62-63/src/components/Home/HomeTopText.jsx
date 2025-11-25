import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="pt-5  mt-70 lg:mt-0">
      <div className="font-[font1] flex items-center justify-center text-center lg:text-[9vw] text-[12vw] lg:leading-[8vw] leading-[10vw] uppercase">
        L'étincelle
      </div>
      <div className="font-[font1] flex items-center justify-center text-center lg:text-[9vw] text-[12vw] lg:leading-[8vw] leading-[10vw] uppercase">
        qui
        <div className="h-[7vw] w-[15vw] rounded-full  lg:mb-5 mb-4 mt-[3px] overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="font-[font1] flex items-center justify-center text-center lg:text-[9vw] text-[12vw] lg:leading-[8vw] leading-[10vw] uppercase">
        la créativité
      </div>
    </div>
  );
};

export default HomeTopText;
