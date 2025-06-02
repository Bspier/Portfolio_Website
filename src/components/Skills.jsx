import React from 'react'
import Github from '../assets/github.png'
import Python from '../assets/python.png'
import Javascript from '../assets/javascript.png'
import C from '../assets/c.png'
import Csharp from '../assets/c_sharp.png'
import Cpp from '../assets/c_pp.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#1B9CA3] '>Skills</p>
                <p className='py-4'>// These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='bg-gray-800 shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={Github} alt="Gitub icon" />
                    <p className='my-4'>Github</p>
                </div>
                
                <div className='bg-gray-800 shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={Python} alt="Python icon" />
                    <p className='my-4'>Pyhton</p>
                </div>
                
                <div className='bg-gray-800 shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={Javascript} alt="Javascript icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                
                <div className='bg-gray-800 shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={C} alt="C icon" />
                    <p className='my-4'>C</p>
                </div>
                
                <div className='bg-gray-800 shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={Cpp} alt="Cpp icon" />
                    <p className='my-4'>C++</p>
                </div>
                
                <div className='bg-gray-800 shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={Csharp} alt="C sharp icon" />
                    <p className='my-4'>C#</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills
