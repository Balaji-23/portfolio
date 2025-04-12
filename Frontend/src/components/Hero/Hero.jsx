import React from 'react'
import './hero.css'
import award1 from '../../assets/award1.png'
import award2 from '../../assets/award2.png'
import award3 from '../../assets/award3.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
// import certificate from '../../assets/certificate.png'
import Speech from './Speech'
const Hero = () => {
  return (
    <div className='hero'>
      {/* Section Left*/}
      <div className='hsection left'>
        {/* title */}
        <h1 className='title'>Hey There,<br /><span>I am Balaji P!</span></h1>
        <div className='awards'>
          <h3>Junior Web Developer</h3>
          <small>at Datasolve Analytics Pvt. Ltd.</small>
          <p>Building scalable web applications using React,Express.js,and MySQL. Responsible for developing dynamic UIs, efficient APIs,and managing databases. Experienced in deploying applications on Google Cloud Platform (Compute Engine & App Engine) to ensure high availability and performance.</p>
          {/* awardslist */}
          <div className='awardslist'>
            <img className='' src={award1} />
            <img className='' src={award2} />
            <img className='' src={award3} />
          </div>
          {/* scroll svg */}
          <a href='#services' className='scroll'>
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
              <path d="M12 5V8" stroke='white' strokeWidth="1" strokeLinecap='round' />
            </svg>
          </a>
        </div>
      </div>
      {/* Section Right*/}
      <div className='hsection right'>
        {/* follow*/}
        <div className='follow'>
          <a href='#instagram'><img className='' alt="instagram" src={instagram} /></a>
          <a href='#facebook'><img className='' alt="facebook" src={facebook} /></a>
          <a href='www.linkedin.com/in/balajip23' target='blank'><img className='' alt="linkedin" src={linkedin} /></a>
          <div className='followtextcontainer'>
            <div className='followtext'>
<p>Follow me</p>
            </div>
          </div>
        </div>
        {/* speech bubble*/}
        <Speech />
        {/* certificate*/}
        {/* <div className='certificates'>
          <img className='img' alt="certificate" src={certificate} />
          <p className=''>Certified internship in <br />Junior web Developer</p>
        </div> */}
        {/* contactbutton*/}
        <a href='#contact' className='contactlink'></a>
        <div className='contactbutton'>
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
        </div>
      
      </div>
    </div>
  )
}

export default Hero