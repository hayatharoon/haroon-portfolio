import React from 'react';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className='primaryText'
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Haroon Hayat.
          </motion.span>
          <motion.span
            className='smallText'
            variants={fadeIn('left', 'tween', 0.4, 1)}
          >
            Full Stack Engineer, building digital
            <br />
            products that are scalable, secure
            <br />
            and ready to launch.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={css.person}
          style={{
            backgroundImage: `url('../splash.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '23rem',
            backgroundPosition: 'bottom',
            position: 'absolute',
            bottom: '-2rem',
            left: '33%',
            margin: 'auto',
          }}
        >
          <motion.img
            variants={slideIn('up', 'tween', 0.5, 1.3)}
            src='./final.png'
            alt='reactjs developer photo'
          />
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
            className={css.experience}
          >
            <div className='primaryText'>4+</div>
            <div className='secondaryText'>
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.5, 1)}
            className={css.certificate}
          >
            <img src='./certificate.png' alt='' />
            <span>FULL STACK ENGINEER</span>
            <span>SOFTWARE DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
