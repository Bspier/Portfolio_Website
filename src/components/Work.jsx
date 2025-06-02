import React from 'react'
import CreateAndPlay from '../assets/projects/create_and_play.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#1B9CA3]'>Work</p>
                <p className='py-6'> Check out some of my work</p>
            </div>

            {/*Container*/}
            <div className='grid py-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/*Grid Item*/}
                <div 
                style={{backgroundImage: `url(${CreateAndPlay})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                > 
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                                <a href="https://play.unity.com/en/games/e625c515-49ea-4c98-9858-9c1f7df2b347/create-and-play-board-games">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/CS467-Create-and-Play-Board-Games/CreateAndPlayBoardGames">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div 
                style={{backgroundImage: `url(${CreateAndPlay})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                                {/*<a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</button>
                                </a>*/}
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div 
                style={{backgroundImage: `url(${CreateAndPlay})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                                {/*<a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</button>
                                </a>*/}
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div 
                style={{backgroundImage: `url(${CreateAndPlay})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                                {/*<a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</button>
                                </a>*/}
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div 
                style={{backgroundImage: `url(${CreateAndPlay})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                                {/*<a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</button>
                                </a>*/}
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div 
                style={{backgroundImage: `url(${CreateAndPlay})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                                {/*<a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</button>
                                </a>*/}
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>

            </div>
            
            

        </div>
    </div>
  )
}

export default Work
