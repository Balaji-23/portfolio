import React from 'react'
import balaji from "../../assets/balaji.jpg"
import { TypeAnimation } from 'react-type-animation';
import { motion} from "motion/react"

const Speech = () => {
  return (
    <motion.div className='bubblecontainer' animate={{opacity:[0,1], transition:{duration:1}}}>
      <div className='bubble'>
      <TypeAnimation
    sequence={[
      "Hi, I'm Balaji",
      1000,
      "I'm a Junior Web Developer",
      1000,
      "I work at Datasolve Analytics",
      1000,
      "Hi, I'm Balaji, working as a Junior Web Developer at Datasolve Analytics.",
      1000
    ]}
    
      
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      style={{ fontSize: '13px', display: 'inline-block'}}
      repeat={Infinity}
    />
   
      </div>
      <img className='' alt="person" src={balaji}/> 
    </motion.div>
  )
}

export default Speech