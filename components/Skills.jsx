import React from 'react'
import { useNav } from '../hooks/useNav';

const Skills = () => {

    const skillsRef = useNav("Skills");

    const skillsLang = [["Assembly", "75%"], ["C++", "55%"], ["CSS", "45%"],
     ["HTML", "45%"],  ["Java", "75%"], ["JavaScript", "65%"], ["OCamel", "25%"],
     ["Python", "65%"], ["SQL", "25%"]];

    const skillsOther = ["Git & GitHub", "React.js", "Node.js", "Tailwind CSS", "CAD", "ROS",
     "TensorFlow", "Jupyter Notebook"];

    const renderLabels = (label) => {
        label = label[0]+" - ";
        return (
            <li key={label} className='cursor-text'>
                <em className='text-[.55rem] sm:text-[.8rem] md:text-[.85rem] lg:text-[1rem] pr-1'>
                    {label}
                </em>
            </li>
        )
    }

    const renderBars = (width) => {
        return (
            <li key={width[0]} className='relative bg-red-400 opacity-25 hover:opacity-75 hover:scale-y-125 z-[98]' style={{width: `${width[1]}`}}>
                <span className=''>
                    &nbsp; 
                </span>
            </li>
        )
    }

    const renderOther = (skill) => {
        return (
            <li key={skill} className='cursor-text' >
                {skill}
            </li>
        )
    }

  return (
    <div ref={skillsRef} id="skills" className='w-full pt-[25vh] pb-[25vh] p-12 flex flex-col items-center'>
        
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-2'>
                <p className='uppercase text-xl tracking-widest'><span className='text-red-400/75'>[04] </span>Skills</p>
                <p className='uppercase text-3xl md:text-4xl tracking-widest'>Programming Languages</p>
            
                <div className='w-full flex flex-cols py-8'>
                    <div className='w-[20%] h-full'>
                        <ul className='uppercase whitespace-nowrap list-none text-right space-y-2'>
                        {skillsLang.map(lbl => renderLabels(lbl))}
                        </ul>
                    </div>
                    <div className='relative w-[80%] h-full'>
                        <ul className='uppercase whitespace-nowrap list-none text-right w-full space-y-2'>
                        {skillsLang.map(lvl => renderBars(lvl))}
                        </ul>
                        <div className='flex flex-row h-[100%] w-[100%] top-0 absolute text-sm border-b-2 border-solid border-slate-400 z-0'>
                            <div className='relative border-r-2 border-slate-400 border-dotted w-[25%] h-full'>
                                <p className='absolute uppercase bottom-[-15%] w-full text-center text-[.55rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]'>Basic</p>
                            </div>
                            <div className='relative border-r-2 border-slate-400 border-dotted w-[25%] h-full'>
                                <p className='absolute uppercase bottom-[-15%] w-full text-center text-[.55rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]'>Proficient</p>
                            </div>
                            <div className='relative border-r-2 border-slate-400 border-dotted w-[25%] h-full'>
                                <p className='absolute uppercase bottom-[-15%] w-full text-center text-[.55rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]'>Advanced</p>
                            </div>
                            <div className='relative w-[25%] h-full'>
                                <p className='absolute uppercase bottom-[-15%] w-full text-center text-[.55rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]'>Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='uppercase text-3xl md:text-4xl tracking-widest py-8'>Programs & Frameworks</p>
                <ul className='uppercase whitespace-nowrap list-none w-full space-y-2'>
                    {skillsOther.map(skill => renderOther(skill))}
                </ul>
            </div>
        </div>
        
        
    </div>
  )
}

export default Skills