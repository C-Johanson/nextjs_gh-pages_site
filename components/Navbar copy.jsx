import React, {useState, useEffect} from 'react'
import Link from 'next/Link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import throttle from 'lodash/throttle'

const Navbar = ({scrollFunc, eduRef}) => {
    const [nav, setNav] = useState(false);
    const [posY, setPosY] = useState(0);
    const [showNav, setShowNav] = useState(true);

    const navLinks = ["Home", "About", "Education", "Experience",
     "Skills", "Projects", "Contact"]
    //const navThrottle = useRef(throttle((newValue) => function(newValue), 1000))

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => { 

        const handleScroll = () => {
            if(window.scrollY>posY+50){
                setShowNav(false);
                setPosY(window.scrollY);
            }
            if(window.scrollY<posY-50){
                setShowNav(true);
                setPosY(window.scrollY);
            }
        }

        const throttledScroll = throttle(handleScroll, 200);

        handleScroll();

        window.addEventListener("scroll", throttledScroll);
        return () => {
            window.removeEventListener("scroll", throttledScroll);
          };
        
    }, [posY, showNav]);

    
    const scrollTo = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

  return (
    
    <div className={showNav ? 'top-[0] fixed w-full h-[8%] shadow-xl z-[100] bg-[#e3e3e3] ease-in duration-[250ms]' 
                            : 'top-[-8%] fixed w-full h-[8%] shadow-xl z-[100] bg-[#e3e3e3] ease-in duration-[250ms]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <div>
                {/*Image or logo*/}
            </div>
        <div>
            <ul className='hidden md:flex'>
                <li onClick={() => scrollFunc(0)} className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                    <span className='text-[#5651e5]'>[00] </span>
                    HOME
                </li>
                <li onClick={() => scrollFunc(1)} className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                    <span className='text-[#5651e5]'>[01] </span>
                    ABOUT
                </li>
                <li onClick={() => scrollFunc(2)} className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                    <span className='text-[#5651e5]'>[02] </span>
                    EXPERIENCE
                </li>
                <li onClick={() => scrollFunc(3)} className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                    <span className='text-[#5651e5]'>[03] </span>
                    SKILLS
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                    <span className='text-[#5651e5]'>[04] </span>
                    INTERESTS
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                    <span className='text-[#5651e5]'>[05] </span>
                    CONTACT
                </li>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
    <div className={nav ? 'fixed right-0 top-0 w-[70%] sm:w-[60%] h-screen bg-[#e3e3e3] p-4 ease-in duration-500' 
                        : 'fixed right-[-70%] sm:right-[-60%] h-screen top-0 p-4 ease-in duration-500'}>
        <div className='flex flex-col justify-between'>
            <div className='flex w-full items-center justify-between'>
                {/*Image or logo*/}
                <div>
                    Menu
                </div>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose />
                </div>
            </div>
            <div className='py-4 px-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                        <li className='py-4 text-sm uppercase hover:text-lg hover:border-b hover:border-t ease-in duration-150 cursor-pointer' >HOME</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm uppercase hover:text-lg hover:border-b hover:border-t ease-in duration-150 cursor-pointer' >ABOUT</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm uppercase hover:text-lg hover:border-b hover:border-t ease-in duration-150 cursor-pointer'>EDUCATION</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm uppercase hover:text-lg hover:border-b hover:border-t ease-in duration-150 cursor-pointer'>EXPERIENCE</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm uppercase hover:text-lg hover:border-b hover:border-t ease-in duration-150 cursor-pointer'>SKILLS</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm uppercase hover:text-lg hover:border-b hover:border-t ease-in duration-150 cursor-pointer'>INTERESTS</li>
                    </Link>
                </ul>
                <div className='absolute bottom-8 w-full'>
                    <p className='uppercase tracking-wide text-[#5651e5]'>CONTACT ME</p>
                    <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Navbar