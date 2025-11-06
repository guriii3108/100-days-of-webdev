import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                  <p className='text-lg text-shadow-2xs  text-white mb-10 font-semibold'>{props.intro}</p>
                  <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full cursor-pointer'>{props.tag}</button>
                        <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full cursor-pointer'><i className="ri-arrow-right-fill"></i></button>
                  </div>
            </div>
      </div>
  )
}

export default RightCardContent