import React, { Children, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const Stair = (props) => {
  const stairParent = useRef(null);
  const pageRef=useRef(null);


  const currentPath = useLocation().pathname;

  console.log(currentPath);

  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParent.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        // duration:2,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(stairParent.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current,{
            opacity:0,
            delay:1.2,
            scale:2
      })
    },
    [currentPath]
  );
  return (
    <div>
      <div ref={stairParent} className="h-screen w-full fixed z-20 top-0">
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef} >
            {props.children}
      </div>
    </div>
  );
};

export default Stair;
