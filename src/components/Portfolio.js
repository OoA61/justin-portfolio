import React, {useEffect, useRef, useState} from 'react'
import { SectionWrapper } from './hoc'
import {rightDivVariant, leftDivVariant, projectDescription} from '../constants'
import { motion, useAnimation, AnimatePresence, easeIn } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import racegambitgif from '../images/racegambitdemo.gif'
import ooatypergif from '../images/ooatyperdemo.gif'


const Portfolio = () => {
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [selectedId, setSelectedId] = useState(null)
  const projectData = {
    ooatyper: {
      title: "OoATyper",
      text: "Web-based Type Speed game that allows users to add friends and create groups to complete with one another. The website is running on Node.Js and Express.Js that communicates with MySQL server running on an AWS EC2 Instance. The prompt is updated every day from the server where a string is automatically divided into the format present on screen so that a typing speed test could be conducted. The test is done though front-end vanilla Javascript where each of the user's keypress is compared with the prompt after each keystroke. One key features of this typing test is that extra letters typed by the user will create new letters on the screen that dynamically update the page to show the typing errors."
    },
    racegambit: {
      title: "RaceGambit",
      text: "Web-based platform where users can place bets on various categories of Formula 1. The website is hosted on AWS using Elastic Beanstalk and Code Pipeline updates the website when the Git Repository is updated. The backend is managed by Node.Js and Express.Js. A custom MySQL Database is running on an EC2 instance on AWS. RestAPI calls are made to Ergast.com after each race session in order to retrieve various race informations and determine the winning bets. Users are given a fixed amount of usable balance on account creation with more balance getting added on a weekly basis. Users can create leagues or join one with the league search function and the league's password. Leagues allow users to compare their betting performance with other users in the league. Users are able to click into each bet in order look look at the overall statistics of the bet such as total bet distribution, bet pool and bet amount distribution."
    }
  }


  document.addEventListener("click", function(e){
    if (selectedId === null){
      return;
    } else if (selectedId != null){
        if (e.target.id != "big-description"){
          setSelectedId(null)
        } 
    }
  })
  document.addEventListener('keydown', (e) => {
    let keycode = e.key
    if (keycode === 'Escape'){
      setSelectedId(null);
    } else {
      return;
    }
  })



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
    <>
    <div className='section flex portfolio-container' ref={ref} id='outside'>
      <motion.div className='portfolio-header'
        initial = "hidden"
        animate = {controls}
        variants = {leftDivVariant}
      >
          <h2>Portfolio</h2>
          <h1>Projects</h1>
          <p></p>
      </motion.div>
      <div className='flex works'>
        <motion.div className='left-portfolio flex'
          initial = "hidden"
          animate = {controls}
          variants = {leftDivVariant}
        >
          <div className='image left' onMouseEnter={() => setShowLeftBtn(true)} onMouseLeave={() => setShowLeftBtn(false)}>
            <CSSTransition in={showLeftBtn === true} unmountOnExit timeout={50} classNames='overlay-trans'>
              <>
                {showLeftBtn ? 
                  <div className='button-overlay'>
                    <button className='site'><FontAwesomeIcon icon={faUpRightFromSquare}/></button>
                    <button className='git'><FontAwesomeIcon icon={faGithub}/></button>
                  </div>
                : <></>}
              </>
            </CSSTransition>
          </div>
          <motion.div className='description flex' layoutId={'ooatyper'} onClick={() => setTimeout(() => {
            setSelectedId('ooatyper')
          }, 1) }
            whileTap={{scale: .98}}
          >
            <div className='description-header flex'>
              <h3>OoATyper</h3>
              <ul className='flex'>
                <li>#nodejs</li>
                <li>#expressjs</li>
                <li>#MySQL</li>
                <li>#AWS</li>
              </ul>
            </div>
            <div className='description-main'>
                <p>{projectDescription.ooatyper}</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className='right-portfolio flex'
          initial = "hidden"
          animate = {controls}
          variants = {rightDivVariant}
        >
          <div className='image right' onMouseEnter={() => setShowRightBtn(true)} onMouseLeave={() => setShowRightBtn(false)}>
          <CSSTransition in={showRightBtn === true} unmountOnExit timeout={50} classNames='overlay-trans'>
              <>
                {showRightBtn ? 
                  <div className='button-overlay'>
                    <button className='site'><FontAwesomeIcon icon={faUpRightFromSquare}/></button>
                    <button className='git'><FontAwesomeIcon icon={faGithub}/></button>
                  </div>
                : <></>}
              </>
            </CSSTransition>
          </div>
          <motion.div className='description flex' layoutId={'racegambit'} onClick={() => setTimeout(() => {
            setSelectedId('racegambit')
          }, 1)}
            whileTap={{scale: .98}}
          >
            <div className='description-header flex'>
              <h3>RaceGambit</h3>
              <ul className='flex'>
                <li>#nodejs</li><li>#expressjs</li><li>#MySQL</li><li>#AWS</li>
              </ul>
            </div>
            <div className='description-main'>
                <p>{projectDescription.racegambit}</p>
            </div>
          </motion.div>
        </motion.div>
        </div>
        <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId} className='big-description flex' id='big-description'
              >
                <div className='flex big-description-header'>
                  {selectedId === 'ooatyper' && <motion.h2> {projectData.ooatyper.title} </motion.h2>}
                  {selectedId === 'racegambit' && <motion.h2> {projectData.racegambit.title} </motion.h2>}
                  <ul className='flex'>
                   <li>#nodejs</li><li>#expessjs</li><li>#MySQL</li><li>#AWS</li>
                  </ul>
                </div>
                {selectedId === 'ooatyper' && <motion.img src={ooatypergif} alt="ooatyper" />}
                {selectedId === 'racegambit' && <motion.img src={racegambitgif} alt="racegambit" />}
                <div className='big-description-text'>
                  {selectedId === 'ooatyper' && <motion.p> {projectData.ooatyper.text} </motion.p>}
                  {selectedId === 'racegambit' && <motion.p> {projectData.racegambit.text} </motion.p>}
                </div>
                <motion.button onClick={() => setSelectedId(null)} className='exit' whileTap={{scale: .8}}><FontAwesomeIcon icon={faCircleXmark}/> </motion.button>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default SectionWrapper(Portfolio, "portfolio")
