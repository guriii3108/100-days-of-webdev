import React from 'react'
import Video from '../components/Home/Video'
import HomeTopText from '../components/Home/HomeTopText'
import HomeBottomText from '../components/Home/HomeBottomText'
import Stair from '../components/common/Stair'

const Home = () => {
  return (
    <div>
    <div className='lg:h-screen h-[100vh] w-screen fixed'>
      <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between  text-white">
      <HomeTopText />
      <HomeBottomText />
      </div>
    </div>
  )
}

export default Home