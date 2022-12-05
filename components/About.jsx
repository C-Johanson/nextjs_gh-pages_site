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
                    Star Wars and Alien led me to investigate the field of robotics. I taught myself the basics of C in order to program micro controllers. These interfaced with 
                    communication protocols like I2C and read from sensors to drive various actuators. The most complex robotics project I completed was a drone, writing 
                    the flight control system for it myself. 
                </p>
                <p className='py-2'>
                    From there, my interests shifted to coding, writing mods for video games I played and experimenting with nueral networks and machine learning models.
                    After enrolling in Cornell University College of Engineering and studied computer science. Ever since, I have been honing my skills and trying to gain as much
                    experience as possible.
                </p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default About