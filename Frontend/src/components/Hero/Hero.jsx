import React from 'react'
import './hero.css'
// import award1 from '../../assets/award1.png'
// import award2 from '../../assets/award2.png'
// import award3 from '../../assets/award3.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import original from '../../assets/original.png'
import react from '../../assets/react.png'
import express from '../../assets/express.png'
import mysql from '../../assets/mysql.png'
// import certificate from '../../assets/certificate.png'
import Speech from './Speech'
import { motion, stagger} from "motion/react"


const awardvariants={
  initial:{
    x:-100,
    opacity:0
  },
   animate:{
    x:0,
    opacity:1
  },
  transition:{
    duration:2,
    staggerChildren:0.2
  }
}
const followvariants={
  initial:{
    y:-100,
    opacity:0
  },
   animate:{
    y:0,
    opacity:1
  },
  transition:{
    duration:2,
    staggerChildren:0.2
  }
}


const Hero = () => {
  return (
    <div className='hero'>
      {/* Section Left*/}
      <div className='hsection left'>
        {/* title */}
        <motion.h1 className='title'
         initial={{y:-100,opacity:0}} 
         animate={{y:0,opacity:1}}
         transition={{duration:1,ease:"easeOut"}}
         >Hey There,<br /><span>I am Balaji P!</span></motion.h1>
         {/* awards */}
        <motion.div className='awards'variants={awardvariants} initial="initial" animate="animate">
          <motion.h3 variants={awardvariants} >Junior Web Developer</motion.h3>
          <motion.h3 variants={awardvariants} >at Datasolve Analytics Pvt. Ltd.</motion.h3>
          <motion.p variants={awardvariants} >Building scalable web applications using React,Express.js,and MySQL. Responsible for developing dynamic UIs, efficient APIs,and managing databases. Experienced in deploying applications on Google Cloud Platform (Compute Engine & App Engine) to ensure high availability and performance.</motion.p>
          {/* awardslist */}
          <motion.div className='awardslist' variants={awardvariants}>
            <motion.img className='' src={react}  variants={awardvariants}/>
            <motion.img className='' src={express}  variants={awardvariants} />
            <motion.img className='' src={mysql}  variants={awardvariants} />
          </motion.div>
          </motion.div>
          {/* scroll svg */}
          <motion.a  animate={{y:[0,5],opacity:[0,1,0]}}  transition={{repeat:Infinity,duration:4,ease:"easeInOut"}}
          href='#services' className='scroll'>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
              />
              <motion.path animate={{y:[0,5]}} transition={{repeat:Infinity,ease:"easeInOut",duration:4}} d="M12 5V8" stroke='white' strokeWidth="1" strokeLinecap='round' />
            </svg>
          </motion.a>
       
      </div>
      {/* Section Right*/}
      <div className='hsection right'>
        {/* follow*/}
        <motion.div className='follow' initial="initial" animate='animate' variants={followvariants}>
          <motion.a href='#instagram'><img className='' alt="instagram" src={instagram} variants={followvariants} /></motion.a>
          <motion.a href='#facebook'><img className='' alt="facebook" src={facebook} variants={followvariants} /></motion.a>
          <motion.a href='www.linkedin.com/in/balajip23' target='blank'><img className='' alt="linkedin" src={linkedin} variants={followvariants}/></motion.a>
          <motion.div className='followtextcontainer' variants={followvariants}>
            <motion.div className='followtext'>
<motion.p>Follow me</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* speech bubble*/}
        <Speech />
        {/* certificate*/}
        {/* <div className='certificates'>
          <img className='img' alt="certificate" src={certificate} />
          <p className=''>Certified internship in <br />Junior web Developer</p>
        </div> */}
        {/* contactbutton*/}
        <motion.a href='#contact' className='contactlink' animate={{rotate:[0,360]}} transition={{duration:10,ease:"linear",repeat:Infinity}}>
        <motion.div className='contactbutton'>
          <svg viewBox="0 0 200 200" width="150" height="150">
            <circle cx="100" cy="100" r="90" fill="pink" />
            <path
              id="innerCirclePath"
              fill="none"
              d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
            <text className='circleText'>
              <textPath className='' href="#innerCirclePath">Hire Now</textPath>
            </text>
            <text className='circleText'>
              <textPath className='' href="#innerCirclePath" startOffset="44%">Contact Me</textPath>
            </text>
          </svg>
          <div className='arrow'>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
        </div>
        </motion.div>
        </motion.a>
      </div>
      <div className='bg'>
        {/* 3D */}
<div className='himg'>
<img src={original} alt='hero'/>
</div>
      </div>
    </div>
  )
}

export default Hero