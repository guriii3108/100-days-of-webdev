import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const project = [
    {
      image1:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      image2:
        "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
      image2:
        "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
      image2:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
    },
  ];
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from('.hero',{
      height:"100px",
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        // markers:true,
        start:'top 110%',
        end:'top -250%',
        scrub:true,
      },
    })
  })
  
  return (
    <div className="lg:p-3 p-2 mb-[50vh]">
      <div className=" lg:pt-[40vh] pt-[70vh]">
        <h2 className="font-[font2] lg:text-[13vw] text-7xl uppercase">Projets</h2>
      </div>
      <div className="-lg:mt-20 lol">
        {project.map((e,idx) =>{
          return <div key={idx} id="abc" className="hero w-full lg:h-[400px] mb-2  flex lg:flex-row flex-col lg:gap-4 gap-2">
            <ProjectCard image1={e.image1} image2={e.image2} />
            </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
