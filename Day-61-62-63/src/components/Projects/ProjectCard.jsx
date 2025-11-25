import React from 'react'

const ProjectCard = (props) => {
  return (
    
<>
            <div className="lg:w-1/2 w-full group h-full relative rounded-none transition-all hover:rounded-[50px] overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src={props.image1}
              alt=""
            />
            <div className="opacity-0 group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
              <h2 className="text-white border-white uppercase text-[4vw] font-[font1] border-2 leading-[0.8] rounded-full w-fit px-5 pt-3">
                View Project
              </h2>
            </div>
          </div>
          <div className="lg:w-1/2 w-full group h-full relative rounded-none transition-all hover:rounded-[50px] overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src={props.image2}
              alt=""
            />
            <div className="opacity-0 group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
              <h2 className="text-white border-white uppercase text-[4vw] font-[font1] border-2 leading-[0.8] rounded-full w-fit px-5 pt-3">
                View Project
              </h2>
            </div>
          </div>
          </>
  )
}

export default ProjectCard