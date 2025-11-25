import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setnavOpen] = useContext(NavbarContext);
  // console.log(navOpen);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });

    tl.to(".stairs", {
      delay: 0.2,
      height: "100%",
      // duration:2,
      stagger: {
        amount: -0.3,
      },
    });
    // tl.from(fullNavLinkRef.current,{
    //       opacity:0,
    // })
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairs", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }
  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav "
      className="fullscreennav hidden z-50 text-white overflow-hidden h-screen w-full fixed bg-black"
    >
      <div className="h-screen w-full fixed">
        <div className="flex h-full w-full">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="flex w-full justify-between lg:p-4 p-2 items-start">
          <div className=" w-40 ">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setnavOpen(false);
            }}
            className=" navlink opacity-0 lg:h-30 h-15 lg:w-30 w-15  relative cursor-pointer "
          >
            <div className="lg:h-40 h-20 lg:w-1 w-0.5 -rotate-45 rounded-lg origin-top absolute bg-green-500"></div>
            <div className="lg:h-40 h-20 lg:w-1 w-0.5 rotate-45 rounded-lg right-0 origin-top absolute bg-green-500"></div>
          </div>
        </div>
        <div className=" py-35">
          <div className="link opacity-0 origin-top relative border-t-1 border-white">
            <h1 className="font-[font2]  lg:leading-[0.7] text-center lg:pt-6 text-[8vw] uppercase">
              Projects
            </h1>
            <Link
              to="/projects"
              onClick={() => {
                setnavOpen(false);
              }}
            >
              <div className="moveLink bg-green-500 absolute h-full hidden lg:flex items-center flex-nowrap overflow-hidden top-0">
                <div className=" text-black flex movex items-center gap-4">
                  <h2 className="whitespace-nowrap  font-[font2] lg:leading-[0.7] text-center lg:pt-6 pt-3 lg:text-[8vw] text-4xl uppercase">Por Tout Vior</h2>
                  <img className="lg:h-[5.5vw] h-9 rounded-full shrink-0 lg:w-[15vw] w-20 object-cover" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  <h2 className="whitespace-nowrap  font-[font2] lg:leading-[0.7] text-center lg:pt-6 pt-3 lg:text-[8vw] text-4xl uppercase">Por Tout Vior</h2>
                  <img className="lg:h-[5.5vw] h-9 rounded-full shrink-0 lg:w-[15vw] w-20 object-cover" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  <h2 className="whitespace-nowrap  font-[font2] lg:leading-[0.7] text-center lg:pt-6 pt-3 lg:text-[8vw] text-4xl uppercase">Por Tout Vior</h2>
                  <img className="lg:h-[5.5vw] h-9 rounded-full shrink-0 lg:w-[15vw] w-20 object-cover" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="link opacity-0 origin-top relative border-t-1 border-white">
            <h1 className="font-[font2]  lg:leading-[0.7] text-center lg:pt-6 text-[8vw] uppercase">
              Agents
            </h1>
            <Link
              to="/agents"
              onClick={() => {
                setnavOpen(false);
              }}
            >
              <div className="moveLink bg-green-500 absolute h-full hidden lg:flex items-center flex-nowrap overflow-hidden top-0">
                <div className=" text-black flex movex items-center gap-4">
                  <h2 className="whitespace-nowrap  font-[font2] lg:leading-[0.7] text-center lg:pt-6 pt-3 lg:text-[8vw] text-4xl uppercase">Por Tout Vior</h2>
                  <img className="lg:h-[5.5vw] h-9 rounded-full shrink-0 lg:w-[15vw] w-20 object-cover" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  <h2 className="whitespace-nowrap  font-[font2] lg:leading-[0.7] text-center lg:pt-6 pt-3 lg:text-[8vw] text-4xl uppercase">Por Tout Vior</h2>
                  <img className="lg:h-[5.5vw] h-9 rounded-full shrink-0 lg:w-[15vw] w-20 object-cover" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="link opacity-0 origin-top relative border-t-1 border-white">
            <h1 className="font-[font2]  lg:leading-[0.7] text-center lg:pt-6 text-[8vw] uppercase">
              Contact
            </h1>
            <Link
              to="/contact"
              onClick={() => {
                setnavOpen(false);
              }}
            >
              <div className="moveLink bg-green-500 absolute h-full hidden lg:flex items-center flex-nowrap overflow-hidden top-0">
                <div className=" text-black flex movex items-center gap-4">
                  <h2 className="whitespace-nowrap  font-[font2] lg:leading-[0.7] text-center lg:pt-6 pt-3 lg:text-[8vw] text-4xl uppercase">Por Tout Vior</h2>
                  <img className="lg:h-[5.5vw] h-9 rounded-full shrink-0 lg:w-[15vw] w-20 object-cover" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  <h2 className="whitespace-nowrap  font-[font2] lg:leading-[0.7] text-center lg:pt-6 pt-3 lg:text-[8vw] text-4xl uppercase">Por Tout Vior</h2>
                  <img className="lg:h-[5.5vw] h-9 rounded-full shrink-0 lg:w-[15vw] w-20 object-cover" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                </div>
              </div>
            </Link>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
