import React, {useEffect, useState} from 'react'
import { SectionWrapper } from './hoc'
import {rightDivVariant, leftDivVariant} from '../constants'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const hello = axios.get('/hello')
   

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });

      setStatus(response.data.status);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Error: Could not send your message. Please try again later.');
    }
  };


  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: .2
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!inView){
      controls.start("hidden")
    }
  }, [controls, inView]);

  return (
    <div className='section flex contact-container' ref={ref}>
      <motion.div className='left-contact flex'
        initial = "hidden"
        animate = {controls}
        variants = {leftDivVariant}
      >
        <div className='contact-header'>
          <h2>Get In Touch</h2>
          <h1>Contact</h1>
        </div>
        <div className='contact-left flex'>
            <div className='card flex full'>
              <h3 className='contact-head'>Contact Information</h3>
              <p>It's just good to have</p>
              <div className='line'></div>
              <h3>Name</h3>
              <p>Justin Ham</p>
              <h3>Location</h3>
              <p>San Jose, California (United States)</p>
              <h3>Email</h3>
              <p>justin-ham@outlook.com</p>
              <h3>Phone</h3>
              <p>(408)516-7761</p>
            </div>
          </div>
      </motion.div>
      <motion.div className='right-contact flex'
        initial = "hidden"
        animate = {controls}
        variants = {rightDivVariant}
      >
        <div className='input-fields flex'>
          <form className='flex' onSubmit={handleSubmit}>
            <label htmlFor="Name" >Your Name</label>
            <input type="text" value={name} name='Name' className='regular-input' required onChange={(e) => setName(e.target.value)} placeholder="Name"/>
            <label htmlFor="Email">Your Email</label>
            <input type="email" value={email} name='Email' className='regular-input' required onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"/>
            <label htmlFor="Message">Your Message</label>
            <textarea type="text" value={message} name='Message' required className='message-input' onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" />
            <button type='submit'>Send</button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');