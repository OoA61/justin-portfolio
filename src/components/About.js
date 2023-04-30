import React, { useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCss3Alt, faGitAlt, faHtml5, faJs, faNode, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { SectionWrapper } from './hoc'
import {rightDivVariant, leftDivVariant, info} from '../constants'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Justin_Ham_Resume from '../resume/Justin_Ham_Resume.pdf'


const logos = [
  faJs,
  faHtml5,
  faCss3Alt,
  faNode,
  faAws,
  faSass,
  faReact,
  faPython
]
const About = () => {
  const logoVariant = {
    visible: i => ({
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.2
      },
      rotate: 0,
      scale: 1
    }),
    hidden: {
      rotate: -90, 
      scale: 0
    }
  }


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
    <div className='about-container section flex' ref={ref}>
      <motion.div className='left-about flex'
        initial = "hidden"
        animate = {controls}
        variants = {leftDivVariant}
      >
        <div className='overview-top'>
          <h2>Introduction</h2>
          <h1>Overview</h1>
          <p className='intro-name'>Hi, My name is Justin Ham</p>
          <p className='intro-dev'>Full-Stack developer.</p>
        </div>
       
        <div className='svg-container flex'>
            {logos.map((logo, i) => (
              <motion.div 
                custom={i}
                initial = "hidden"
                animate = {controls}
                variants = {logoVariant}         
              >
                <FontAwesomeIcon icon={logo}/>
              </motion.div>
            ))}
          </div>
      </motion.div>
      <motion.div className='right-about flex'
        initial = "hidden"
        animate = {controls}
        variants = {rightDivVariant}
      >
        <div className='top-right-about flex'>
          <div className='card flex'>
            <h3>Skills</h3>
            <p>{info.skills}</p>
            <a href={Justin_Ham_Resume} target="_blank">
              <button>Click for Resume</button>
            </a>
          </div>
        </div>
        <div className='bottom-right-about flex'>
          <div className='card flex'>
            <h3>Background</h3>
            <p>{info.background}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, 'about');