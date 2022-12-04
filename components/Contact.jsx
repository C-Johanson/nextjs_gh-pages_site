import { useNav } from '../hooks/useNav'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const contactRef = useNav("Contact")
  const serviceID = "service_lv836hr"
  const templateID = "template_1gepxda"
  const userID = "W_4ibjcG4o0BodwcM"

  function sendEmail(e) {
    setStatus('Sending...')
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          window.location.reload() 
          setStatus('Sent')
      }, (error) => {
          console.log(error.text);
      });
    }

  const [formStatus, setStatus] = useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const { name, email, message } = e.target.elements
    let content = {
        name: name.value, 
        email: email.value,
        massage: message.value,
    }
    console.log(content)
    setStatus('Sent')
    
  }

  return (
    <div ref={contactRef} id='contact' className='w-full pt-[25vh] pb-[25vh] p-12 flex items-center'>
        <div className='w-full m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <form onSubmit={sendEmail} >
                <p className='uppercase text-xl tracking-widest'><span className='text-red-400/75'>[05] </span>Contact Me</p>
                <p className='py-2'>
                    Name
                </p>
                <input type="text" id="name" className='w-full bg-white/50 transition ease-in-out rounded  border border-solid focus:border-red-400/75 focus:outline-none'/>
                <p className='py-2'>
                    Email
                </p>
                <input type="text" id="email" className='w-full bg-white/50 transition ease-in-out rounded border border-solid focus:border-red-400/75 focus:outline-none'/>
                <p className='py-2'>
                    Message
                </p>
                <input type="text" id="message" className='w-full bg-white/50 transition ease-in-out rounded border border-solid focus:border-red-400/75 focus:outline-none'/>
                <button type="submit" className='mt-2 p-2 shadow-none text-black uppercase border-b-2 border-[#e3e3e3] hover:border-red-400 hover:bg-red-400 hover:bg-opacity-25 hover:text-white'>
                    {formStatus}
                </button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contact