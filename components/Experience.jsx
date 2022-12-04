import React from 'react'
import { useNav } from '../hooks/useNav';

const Experience = () => {

    const experienceRef = useNav("Experience");

  return (
    <div ref={experienceRef} id="experience" className='w-full pt-[25vh] pb-[25vh] p-12 flex flex-col items-center'>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-1'>
                <p className='uppercase text-xl tracking-widest'><span className='text-red-400/75'>[03] </span>Experience</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-0 col-span-1 col-start-1'>
                <p className='uppercase text-3xl md:text-4xl tracking-widest'>IBM</p>
            </div>
            <div className='py-0 col-span-1 col-start-2'>
            <p className='uppercase text-l text-right tracking-wide'>July 2020 - Present</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-1 col-start-1'>
                <p className='uppercase text-xl tracking-wide'>Backend Software Engineer </p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='pt-0 pb-2 col-span-1 col-start-1'>
                <p className='uppercase text-l tracking-wide'>Band 7</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-1'>
                <p className='uppercase text-2xl md:text-3xl tracking-wide'>Accomplishments</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='flex py-0 col-span-2 col-start-1'>
                <ul className='mr-8 pl-6 list-disc'>
                    <li>Lead AI and Machine Learning initiatives for IMS Infrastructure department</li>
                    <li>Research opportunities for AI and Machine Learning integration into IMS</li>
                    <li>Lead developer on year long project,  implemented new functionality for 
                        IMS asynchronous transactions, wrote assembly logic for function activation 
                        and transaction routing, organized the team in weekly meetings, completed the 
                        project ahead of schedule</li>
                    <li>Designed, developed, and trained Recurrent Neural Network model utilizing LSTM 
                        layers and autoencoders for preemptive service outage detection in IMS systems using 
                        real time data</li>
                    <li>Wrote production code in assembly, used virtual machines to build and test the code</li>
                    <li>Recreated customer reported issues, located source of and resolved the issue with the production code</li>
                    <li>Performed functional verification testing on provided fixes as well as development line items</li>
                </ul>
            </div>
        </div>

        <div className='w-full pt-10 md:grid grid-cols-3 gap-8'>
            <div className='py-0 col-span-1 col-start-1'>
                <p className='uppercase text-3xl md:text-4xl tracking-widest'>Cornell University</p>
            </div>
            <div className='py-0 col-span-1 col-start-2'>
            <p className='uppercase text-l text-right tracking-wide'>June 2018 - Sept 2018</p>
            <p className='uppercase text-l text-right tracking-wide'>June 2019 - Sept 2019</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-1 col-start-1'>
                <p className='uppercase text-xl tracking-wide'>Assistant Web Developer</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-1'>
                <p className='uppercase text-2xl md:text-3xl tracking-wide'>Accomplishments</p>
            </div>
        </div>
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='flex py-0 col-span-2 col-start-1'>
                <ul className='mr-8 pl-6 list-disc'>
                    <li>Wrote Python script to scrape employee hierarchy data from the Cornell School of Business website in order to construct a tree diagram of employee relations</li>
                    <li>Integrated the data with google sheets and Workday API’s to validate this model and organize and track link relationships for employee pages on the website</li>
                    <li>Worked closely with professional programmers to complete tasks as part of a team</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience