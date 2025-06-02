import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
        <div>
          <img src={logo} alt="Logo Image" style={{width: '50px'}}/>
        </div>
        
        {/*menu*/}
          <ul className='hidden md:flex'>
            <li>
              <Link  
                to="home"  
                smooth={true} 
                duration={500} 
              >
              Home
              </Link>
            </li>
            <li>
              <Link  
                to="about"  
                smooth={true} 
                duration={500} 
              >
              About
              </Link>
            </li>
            <li>
              <Link  
                to="skills"  
                smooth={true} 
                duration={500} 
              >
              Skills
              </Link>
            </li>
            <li>
              <Link  
                to="work"  
                smooth={true} 
                duration={500} 
              >
              Work
              </Link>
            </li>
            <li>
              <Link  
                to="contact"  
                smooth={true} 
                duration={500} 
              >
              Contact
              </Link>
            </li>
          </ul>

        {/*hamburger menu*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
              <Link  
                to="home"  
                smooth={true} 
                duration={500}
                onClick={() => setNav(false)}
              >
              Home
              </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link  
                to="about"  
                smooth={true} 
                duration={500}
                onClick={() => setNav(false)}
              >
              About
              </Link>
          </li>  
          <li className='py-6 text-4xl'>
            <Link  
                to="skills"  
                smooth={true} 
                duration={500}
                onClick={() => setNav(false)} 
              >
              Skills
              </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link  
                to="work"  
                smooth={true} 
                duration={500}
                onClick={() => setNav(false)}
              >
              Work
              </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link  
                to="contact"  
                smooth={true} 
                duration={500}
                onClick={() => setNav(false)}
              >
              Contact
              </Link>
          </li>
        </ul>  
        {/*social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/brian-spier-8b3aa519a/">
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/Bspier95">
                Github <FaGithub size={30} />
              </a>
            </li>
            {/*<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b91e1e]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="mailto:bspier95@gmail.com?subject=Portfolio%20Contact&body=Hi%20Brian,">
                Email <HiOutlineMail size={30} />
              </a>
            </li>*/}
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/Brian_Spier_Resume.pdf">
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Navbar
