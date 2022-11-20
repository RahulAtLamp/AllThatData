import React, { useState, useEffect, useRef } from 'react'
import "./home.scss";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0
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
        <p style={{ color: "#fff", paddingTop: "20px" }}>
          Reinventing COLLABORATION in the most SECURE way!
        </p>
      </div>
    </div>
  )
}

export default Home