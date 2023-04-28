import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef} from 'react';
import axios from 'axios';


const SmokeParticle = ({ x, y, opacity }) => (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '15px',
        height: '15px',
        transform: 'translate(13px, 13px)',
        borderRadius: '50%',
        backgroundColor: `rgba(256, 256, 256, ${opacity})`,
      }}
    />
  );

const Ship = ( showShip ) => {
    const [shipLocation, setShipLocation] = useState({ x: 750, y: 600 });
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const [keysPressed, setKeysPressed] = useState({});
    const [smokeTrail, setSmokeTrail] = useState([]);
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()   
    const handleKeyDown = (event) => {
        const { key } = event;
        setKeysPressed((prevKeysPressed) => ({ ...prevKeysPressed, [key]: true }));
      };
    
      const handleKeyUp = (event) => {
        const { key } = event;
        setKeysPressed((prevKeysPressed) => ({ ...prevKeysPressed, [key]: false }));
      };

    useEffect(() => {
        const updateVelocity = () => {
          const newVelocity = { ...velocity };
          const maxVelocity = 15;
          const deceleration = .95;
            
          if (keysPressed.w) {
            newVelocity.y = Math.max(newVelocity.y - .5, -maxVelocity);
          } else if (keysPressed.s) {
            newVelocity.y = Math.min(newVelocity.y + .5, maxVelocity);
          } else {
            newVelocity.y *= deceleration;
          }
    
          if (keysPressed.a) {
            newVelocity.x = Math.max(newVelocity.x - .5, -maxVelocity);
          } else if (keysPressed.d) {
            newVelocity.x = Math.min(newVelocity.x + .5, maxVelocity);
          } else {
            newVelocity.x *= deceleration;
          }
    
          setVelocity(newVelocity);
        };

        const updateSmokeTrail = () => {
            setSmokeTrail((prevSmokeTrail) => {
              const newSmokeTrail = prevSmokeTrail.map((particle) => ({
                ...particle,
                lifetime: particle.lifetime - 3,
              }));
      
              // Add a new smoke particle at the current spaceship position
              newSmokeTrail.push({
                x: shipLocation.x,
                y: shipLocation.y,
                lifetime: 60, // Lifetime in frames (1 second at 60fps)
              });
      
              // Remove expired smoke particles
              return newSmokeTrail.filter((particle) => particle.lifetime > 0);
            });
          };

        const updatePosition = () => {
            const newX = shipLocation.x + velocity.x;
            const newY = shipLocation.y + velocity.y;
            setShipLocation({ x: newX, y: newY });
          };
      
          const interval = setInterval(() => {
            updateVelocity();
            updatePosition();
            updateSmokeTrail();
          }, 1000 / 90); // Update 60 times per second
      
          return () => clearInterval(interval);
          
        }, [keysPressed, velocity]);
    
      useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
        };
      }, []);
      const rotation = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI);

    
  return (
    <>
    <div className='ship-box'>
    {smokeTrail.map((particle, index) => (
        <SmokeParticle
          key={index}
          x={particle.x}
          y={particle.y}
          opacity={particle.lifetime / 60}
        />
      ))}
        <FontAwesomeIcon ref={myRef} className="shadow" id="ship" icon={faShuttleSpace} style={{ display: `${showShip}` ,left: `${shipLocation.x}px`, top: `${shipLocation.y}px`, transform: `rotate(${rotation}deg)`}}/>
    </div>
    </>
  )
}

export default Ship
