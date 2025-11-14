import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center px-6 py-20 relative overflow-hidden'>
      {/* Decorative background circles */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl'></div>
      
      <div className='max-w-5xl w-full relative z-10'>
        <div className='text-center space-y-8'>
          {/* Main heading */}
          <div className='space-y-4'>
            <h1 className='text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight'>
              Welcome
            </h1>
            <div className='flex items-center justify-center gap-4'>
              <div className='h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent'></div>
              <div className='w-2 h-2 rounded-full bg-pink-400'></div>
              <div className='h-px w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
            </div>
            <h2 className='text-5xl md:text-6xl font-light text-gray-300'>
              Home
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light mt-12'>
            A beautiful space to begin your journey
          </p>
          
          {/* Decorative line */}
          <div className='mt-16 flex justify-center'>
            <div className='w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home