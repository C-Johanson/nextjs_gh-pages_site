import { useContext, useEffect, useRef } from 'react'
import { NavContext } from '../context/NavContext'

const Navbar = () => {

    const containerRef = useRef(null);

    const { activeLinkId } = useContext(NavContext);
    
    const navLinks = ["Home", "About", "Education", "Experience",
     "Skills", "Contact"];

    const renderNavLink = (content, index) => {
        const scrollToId = `${content.toLowerCase()}Section`;

        const scrollTo = () => {
            document.getElementById(scrollToId).scrollIntoView({behavior: 'smooth'})
        }
        return (
            <ul key={content} className=''>
                <li 
                id={content} 
                onClick={scrollTo} 
                className={(activeLinkId===content) ?
                 'group text-sm ml-2 mr-2 px-2 uppercase border-b-2 border-red-400 bg-red-400/25 cursor-pointer'
                 : 'group text-sm ml-2 mr-2 px-2 uppercase border-b-2 border-[#e3e3e3] hover:border-red-400 hover:bg-red-400 hover:bg-opacity-25 cursor-pointer'}>
                    <span className={(activeLinkId===content.toLowerCase) ? 
                    'text-red-400'
                     : 'text-red-400/75 group-hover:text-red-400'}>[0{index}]&nbsp;</span>
                    <span className={(activeLinkId===content.toLowerCase) ? 
                    'text-white'
                     : 'group-hover:text-white'}>{content}</span>
                </li>
            </ul>
        )
    }

    const scrollToCenter = () => {
        if(!activeLinkId) return;

        const containerRect = containerRef.current;
        const elementRect = document.getElementById(activeLinkId);
        const scrollX = elementRect.offsetLeft + (elementRect.offsetWidth/2) - (containerRect.offsetWidth/2);
        
        containerRef.current.scrollTo({ left: scrollX, behavior: 'smooth' });
    }

    useEffect(() => {
        scrollToCenter();
    }, [activeLinkId])

  return (
    
    <div className='top-[0] fixed w-full shadow-xl z-[100] bg-[#e3e3e3] p-4'>
        <nav ref={containerRef} className='flex pb-4 flex-row justify-between items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-red-400/75 scrollbar-track-slate-400/25'>
            {navLinks.map((nav, index) => renderNavLink(nav, index))}
            <ul>
                <li className="text-sm ml-2 mr-2 px-2 uppercase border-b-2 border-[#e3e3e3] hover:border-red-400 hover:bg-red-400 hover:bg-opacity-25 hover:text-white">
                <a  href={`${process.env.NEXT_PUBLIC_RESUME}/resume/ChrisJohansonResume2022.pdf`} download = "ChrisJohansonResume2022.pdf">
                Resume
                </a>  
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar