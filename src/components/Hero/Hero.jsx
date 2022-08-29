import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion';
function Hero() {
  const transition = {type: 'spring', duration:3};
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
              <motion.div
                initial={{left: mobile? '174px':'238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
              ></motion.div>
              <span>The best fitness club in the town</span>
            </div>
            {/* Hero text */}
            <div className="hero-text">
              <div>
                <span className="stroke-text">Shape</span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div>
                <span>
                  In here we will help
                   you to shape and build 
                   your ideal body and live up 
                   your life to fullest.
                </span>
              </div>
            </div>

            {/* figures */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={0} delay={4} preFix="+"/>
                </span>
                <span>expert coachs</span>
              </div>
              <div>
                <span>
                  <NumberCounter end={978} start={600} delay={8} preFix="+"/>
                </span>
                <span>members joined</span>
              </div>
              <div>
                <span>
                  <NumberCounter end={52} start={0} delay={4} preFix="+"/>
                </span>
                <span>fitness programs</span>
              </div>
            </div>

            {/* hero buttons */}
            <div className="hero-buttons">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
        </div>

        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div
          initial={{right:"-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition}
          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116bpm</span>
          </motion.div>

          {/*Hero images */}
          <motion.img
          initial={{right:"3rem"}}
          whileInView={{right:"13rem"}}
          transition={transition}
          className="hero-images" src={hero_image} alt="" />
          <motion.img
          initial={{right:"11rem"}}
          whileInView={{right:"25rem"}}
          transition={transition}
          className="hero-images-back" src={hero_image_back} alt="" />
          <motion.div
          initial={{right:"45rem"}}
          whileInView={{right:"35rem"}}
          transition={transition}
          className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero