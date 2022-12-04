import { useNav } from '../hooks/useNav'

const About = () => {

  const aboutRef = useNav("About");

  return (
    <div ref={aboutRef} id="about" className='w-full pt-[25vh] pb-[25vh] p-12 flex items-center'>
        <div className='w-full m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'><span className='text-red-400/75'>[01] </span>About Me</p>
                <p className='py-2'>
                    I am a goal-oriented and motivated individual with experience teaching myself complex topics in a broad set of technical fields
                    in the pursuit of these goals. I like to challenge myself, enjoy working with others, and excell in an agile organized development team. 
                    I have professional experience in backend development on large and complex systems.
                </p>
                <p className='py-2'>
                    I have spent the past ten years developing my programming skills and experience. My interest in the Sci-Fi technology found in the worlds of
                    Star Wars and Alien is what initially led me to robotics. I taught myself the basics of C and programmed micro controllers to interface with 
                    communication protocols like I2C and read from sensors and drive various actuators. The most complex project I completed was a drone, writing 
                    the flight control system for it myself. 
                </p>
                <p className='py-2'>
                    From there, 
                </p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default About