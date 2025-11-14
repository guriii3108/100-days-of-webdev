import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center px-6 py-20'>
      <div className='max-w-2xl w-full'>
        <div className='text-center mb-16'>
          <h1 className='text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6'>
            Get In Touch
          </h1>
          <p className='text-xl text-gray-300'>We'd love to hear from you</p>
        </div>
        
        <div className='bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12'>
          <form className='space-y-6'>
            <div>
              <label className='block text-white font-medium mb-2'>Name</label>
              <input 
                type='text' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                placeholder='Your name'
              />
            </div>
            
            <div>
              <label className='block text-white font-medium mb-2'>Email</label>
              <input 
                type='email' 
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                placeholder='your.email@example.com'
              />
            </div>
            
            <div>
              <label className='block text-white font-medium mb-2'>Message</label>
              <textarea 
                rows='5'
                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none'
                placeholder='Your message here...'
              ></textarea>
            </div>
            
            <button 
              type='submit'
              className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className='mt-12 flex justify-center gap-8'>
          <div className='text-center'>
            <div className='text-gray-300'>Email</div>
            <div className='text-white'>sgurveer97@gmail.com</div>
          </div>
          <div className='text-center'>
            <div className='text-gray-300'>Phone</div>
            <div className='text-white'>+91 7888756581</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact