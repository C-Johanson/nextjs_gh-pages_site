import React from 'react'
import { useNav } from '../hooks/useNav';

const Education = () => {

    const educationRef = useNav("Education");

  return (
    <div ref={educationRef} id="education" className='w-full pt-[25vh] pb-[25vh] p-12 flex flex-col items-center'>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-2'>
                <p className='uppercase text-xl tracking-widest'><span className='text-red-400/75'>[02] </span>Education</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-0 col-span-1 col-start-2'>
                <p className='uppercase text-3xl md:text-4xl tracking-widest'>CORNELL UNIVERSITY</p>
            </div>
            <div className='py-0 col-span-1 col-start-3'>
            <p className='uppercase text-l text-right tracking-wide'>Septmeber 2016 - May 2020</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-1 col-start-2'>
                <p className='uppercase text-xl tracking-wide'>College of Engineering, Ithaca NY</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='pt-0 pb-2 col-span-1 col-start-2'>
                <p className='uppercase text-l tracking-wide'>Bachelor of Science, Computer Science</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-2'>
                <p className='uppercase text-2xl md:text-3xl tracking-wide'>Relevant Courses</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='flex py-0 col-span-2 col-start-2'>
                <ul className='mr-8'>
                    <li>CS 3410 - Systems Programming</li>
                    <li>CS 4320 - Intro to Database Systems</li>
                    <li>CS 4410 - Operating Systems</li>
                    <li>CS 4750 - Foundations of Robotics</li>
                    <li>CS 4700 - Foundations of Artif Inllgnce</li>
                </ul>
                <ul>
                    <li>CS 4780 - Machine Learning Intell Sys</li>
                    <li>CS 4820 - Intro Analysis of Algorithms</li>
                    <li>MATH 2930 - Differential Equations for Engineers</li>
                    <li>MATH 1920 - Multivariable Calculus for Engineers</li>
                    <li>MATH 2940 - Linear Algebra for Engineers</li>
                </ul>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-2'>
                <p className='uppercase text-2xl md:text-3xl tracking-wide'>Extracurriculars</p>
                <ul>
                    <li>Cornell University Rugby Football Club</li>
                    <li>Cornell Barbell Club</li>
                    <li>Cornell Rowing</li>
                    <li>Pi Kappa Alpha: Beta Theta Chapter</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Education