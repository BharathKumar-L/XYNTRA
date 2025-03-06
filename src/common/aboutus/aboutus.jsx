import React from 'react'
import logo from '../../assets/logo.png'
import reclogo from '../../assets/rec.png'
import cslogo from '../../assets/cslogo.png'
import InfiniteScroll from './InfiniteScroll';
import './aboutus.css'

const Aboutus = () => {
  const items = [
    { content: <img src={reclogo} alt="XYNTRA" className='logofooter' /> },
    { content: <img src={logo} alt="XYNTRA" className='logofooter' /> },
    { content: <img src={cslogo} alt="XYNTRA" className='logofooter' /> },
    { content: <img src={reclogo} alt="XYNTRA" className='logofooter' /> },
    { content: <img src={logo} alt="XYNTRA" className='logofooter' /> },
    { content: <img src={cslogo} alt="XYNTRA" className='logofooter' /> },
  ];




  return (
    <>
    <h2 className="centeralign">ABOUT US </h2>
    <div className="container_aboutus">
    {/* Left Side */}
    <div className="left_ab">
      <h1>IEEE Computer Society</h1>
      <p>The IEEE Computer Society of REC is committed to fostering a culture of community, collaboration, and computation. With a legacy of organizing impactful technical events, we aim to inspire innovation and empower students to tackle real-world challenges. Our flagship hackathon, Battle Eidos, invites engineering students to brainstorm, build, and innovate over 36 electrifying hours. Let’s create solutions that matter and make memories that last!</p>
    </div>

    {/* Right Side - Infinite Scroll */}
    <div className="right_ab" style={{height: '500px', position: 'relative'}} >

      <InfiniteScroll
        items={items}
        isTilted={true}
        tiltDirection="left"
        autoplay={true}
        autoplaySpeed={0.9}
        autoplayDirection="down"
        pauseOnHover={true}
      />
    </div>
  </div>
  </>
  )
}

export default Aboutus;