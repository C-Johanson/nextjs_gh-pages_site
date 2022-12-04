import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useNav } from '../hooks/useNav'

const Main = () => {

    const mainRef = useNav("Home");

  return (
    <div ref={mainRef} id="home" className='w-full pt-[25vh] pb-[25vh] text-center'>
        <div className='max-w-[66%] w-full h-full mx-auto p-2 flex justify-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    Chris Johanson
                </h1>
                <div className='uppercase border-r-2 m-auto w-[22ch] text-md tracking-wideest text-gray-600 overflow-hidden whitespace-nowrap animate-typing '>{"//"}Software Developer</div>
                
                <div className='flex items-center justify-between m-auto py-4 max-w-[70%] '>
                    <div>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/chris-johanson-75931b24a/">
                        <div className='w-[45px] h-[45px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 hover:bg-blue-400 ease-in duration-150'>
                            <FaLinkedinIn  size='lg'/>
                        </div>
                        </a>
                    </div>

                    <div>
                        <a target='_blank' rel="noreferrer" href="https://github.com/C-Johanson/">
                        <div className='w-[45px] h-[45px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 hover:bg-purple-400 ease-in duration-150'>
                            <FaGithub size='lg'/>
                        </div>
                        </a>
                    </div>

                    <div>
                        <a target='_blank' rel="noreferrer" href="mailto:C.Alx.Johanson@gmail.com">
                        <div className='w-[45px] h-[45px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 hover:bg-red-400 ease-in duration-150'>
                        <AiOutlineMail size='lg'/>
                        </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main