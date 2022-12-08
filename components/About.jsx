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
                    I have spent the past ten years developing my programming skills and experience. Growing up, I was always captivated by the technology depicted in
                    the Sci-Fi worlds of Star Wars, Alien, and others. This fascination led to me trying to learn everything I could about the technology here in the real world.
                    From low level communication protocols like I2C and robotics control systems like PIDs used to control the flight of a drone, to programming micro controllers
                    and modding video games that I liked to play, I have taught myself a broad range of complex topics and concepts. At Cornell University, I enrolled as a computer science 
                    major and continued building my skill set. I am always excited to tackle complex problems, whether I have experience in the problem space or not.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About