import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faW, faA, faS, faD } from '@fortawesome/free-solid-svg-icons';
import Ship from './Ship'
import 'animate.css';

const Main = () => {
  const [glow, setGlow] = useState(false)
  const [showShip, setShowShip ] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlow(glow => !glow)
      console.log(glow)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main-container'>
      <h1 className={`animate__animated animate__backInDown animate__fast name ${glow ? "glow" : ""}`}>
          JUSTIN HAM
      </h1>
      <br />
      <p className={`animate__animated animate__backInRight animate__fast ${glow ? "glow" : ""}`}>
          I Like Making Stuff
      </p>
      {showShip ? 
        <div className='wasd'>
          <FontAwesomeIcon icon={faA}/>
        <div className='wa flex'>
          <FontAwesomeIcon icon={faW}/>
          <FontAwesomeIcon icon={faS}/>
        </div>
        <FontAwesomeIcon icon={faD}/>
        </div>
        : null }
       {!showShip ? <button className='game-btn animate__animated animate__backInLeft animate__fast' onClick={() => setShowShip(true)}>Fly a ship</button> : null }
       {showShip ? <Ship showShip = {showShip}/> : null}
    </div>
  )
}

export default Main
