import React, { useEffect, useRef, useState } from 'react'
import "./Experience.css"
import Accord from '../../components/accord/Accord'
import experiences from '../../data/experiences'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber';
import Blob from '../../components/Blob'
import { useNavigate } from 'react-router-dom'

function Experience() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const boxRef = useRef(null);
  const accordRef = useRef(null)
  const blobRef = useRef();

  const animate = () => {
    var t1 = gsap.timeline({delay: 0.5})
    t1.to(boxRef.current, {duration: 1, x: 200, ease: "elastic.out", opacity: 1, onStart: () => {
      gsap.to(titleRef.current, {opacity: 1, duration: 1})
    }})
    .fromTo(accordRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
    .fromTo(blobRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
  }

  useEffect(() => {
    animate();
  }, [])

  return (
    <div className='experience-container'>
      <div className='experience-title-container'>
        <div className='exp-box box-color' ref={boxRef} />
        <h1 className='experience-title' ref={titleRef}>EXPERIENCE</h1>
      </div>
      <div className="accord" ref={accordRef}>
        <Accord />
      </div>
      <Canvas ref={blobRef} camera={{ position: [0.0, 0.0, 8.0] }} onClick={() => navigate("/projects")}>
          <Blob />
      </Canvas>
    </div>
  )
}

export default Experience