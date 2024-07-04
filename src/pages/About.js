import React,{ useContext } from 'react';
import WomanImg from "../img/about/woman.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from "../transitions";
import { CursorContext } from '../context/CursorContext';


const About = () => {
  const { mouseEnterHandler,mouseLeaverHandler } = useContext(CursorContext)

  return <motion.section
    initial={{ opacity:0, y:'100%' }}
    animate={{ opacity:1, y:0 }}
    exit={{ opacity:0, y:"100%" }}
    transition={transition1}
     className='section'>
  <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaverHandler}
  className=' container mx-auto h-full relative'>
    <div className=' flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center
    lg:text-left lg:pt-16'>
      <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
      <img src={WomanImg}/>
      </div>

      <motion.div
      initial={{ opacity:0, y:'-80%' }}
      animate={{ opacity:1, y:0 }}
      exit={{ opacity:0, y:"-80%" }}
      transition={transition1}
      className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
        <h1 className='h1'>About me</h1>
        <p className='mb-12 max-w-sm'>
        Lorem ipsum dolor sit amet, consectetur adip
        iscing elit, sed do et <b>nostruhenderit sh</b> dolore magna aliqua. Ut enim 
        ad minim veniam, quis  in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occficia d.
         <br/>
         <br/>
         
         Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
         , quis nostrud exercitation  ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolor.
         
        </p>
         
         <Link to={"/portfolio"} className=' btn'>View my work</Link>
      </motion.div>
    </div>
  </div>
  </motion.section>;
};

export default About;
