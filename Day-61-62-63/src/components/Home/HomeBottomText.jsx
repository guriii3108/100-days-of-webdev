import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] relative flex items-center justify-center gap-2 mb-3 ">
      <p className="absolute lg:w-80 right-0 lg:bottom-30 w-2/3 bottom-30">K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      <div>
        <Link
          to="/projects"
          className="lg:text-[6vw] text-[7vw] hover:border-green-500 hover:text-green-500 leading-[5vw] lg:border-3 border-2 border-white rounded-full lg:px-6 px-3   lg:pt-4 pt-2 uppercase"
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
          to="/agents"
          className="lg:text-[6vw] text-[7vw] hover:border-green-500 hover:text-green-500 leading-[5vw] lg:border-3 border-2 border-white rounded-full lg:px-6 px-3  lg:pt-4 pt-2 uppercase"
        >
          Agents
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
