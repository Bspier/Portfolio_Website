import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/awnqxqeb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#1B9CA3] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// submit the from below or send me an emial - Bspier95@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='email' name='name' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='message' rows="10"></textarea>
            <button className='text-white border-2 border-[#ccd6f6] hover:bg-[#1B9CA3] hover:border-[#1B9CA3] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
      
    </div>
  )
}

export default Contact
