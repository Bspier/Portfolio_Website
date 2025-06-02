import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
        {/*container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#1B9CA3]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Brian Spier</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#5c6174]'>I am recent graduate from Oregon State University</h2>
            <p className='text-[#5c6174] py-4 max-w-[700px]'>
            I am recent graduate looking for work in the software development industry.
            I have developed databases, apps, games, servers and operating systems.
            </p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1B9CA3] hover:border-[#1B9CA3]'>View Work
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
