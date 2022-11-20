import React, { useState, useEffect, useRef } from 'react'
import "./home.scss";
import HALO from "vanta/dist/vanta.halo.min.js";
import * as THREE from "three";

function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 900.00,
          minWidth: 600.00,
          scale: 1.00,
          scaleMobile: 1.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className='home-main'>
      <div ref={vantaRef}>
        <p className='tagline'>
          Reinventing <span className='highlight'>COLLABORATION</span> <br /> in the most <span className='highlight'>SECURE</span> way!
        </p>
      </div>
    </div>
  )
}

export default Home