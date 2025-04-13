import React from 'react'
import { delay, easeInOut, motion, stagger, transform } from "motion/react"

const shapevariants={
    initial:{
        x:-100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
        duration:2,
      delay:3
        }  
    },
    initialcirc:{
        y:100,
        opacity:0
    },
    animatecirc:{
    y:0,
        opacity:1,
        transition:{
        duration:2,
      delay:3
        }  
    }
}

const listvariants={
    listinitial:{
x:-400,

opacity:0.5
    },
    listanimate:{
x:200,
y:-100,
opacity:1,
transition:{
    duration:2,
    delay:4,
    staggerChildren:1
}

    }
}


const Test = () => {
  return (
    <section className='' style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
        <motion.div style={{backgroundColor:"red",height:200,width:200}}
        // animate={{x:[0,100],y:[0,-120], opacity:[0,1]}}
    //    transition={{
    //     duration:2,
    //     ease:"easeInOut",
    //     delay:"4"
    //    }}
    variants={shapevariants}
initial="initial"
animate="animate"
        >

        </motion.div>
        <motion.div style={{backgroundColor:"red",height:200,width:200,borderRadius:100}}
    variants={shapevariants}
initial="initialcirc"
animate="animatecirc"
        >

        </motion.div>
        <motion.ul variants={listvariants} initial="listinitial" animate="listanimate">
            <motion.li variants={listvariants}>Javascript</motion.li>
            <motion.li variants={listvariants}>React</motion.li>
            <motion.li variants={listvariants}>Express</motion.li>
        </motion.ul>
    </section>
  )
}

export default Test