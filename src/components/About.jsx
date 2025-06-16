import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#1B9CA3]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi, I’m Brian — welcome to my corner of the web.
                        </p>
                    </div>
                    <div>
                        <p>
                            I’m a full-stack developer with a passion for building meaningful and efficient solutions. With a background in both computer science and biology, 
                            I bring a unique perspective to problem-solving — blending analytical thinking with creative execution. Whether it's developing intuitive user interfaces 
                            or architecting backend systems, I thrive on turning ideas into working products. 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
