import React from 'react';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';

// Software developer and Frontend Engineer focusing on React, Javascript, Web Accessibility, Design
// Systems, and developing chrome extensions. Skilled in designing, developing, and testing web-based
// applications incorporating a range of technologies.
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <motion.span className='primaryText' variants={fadeIn('right', 'tween', 0.2, 1)}>
            Hey There,
            <br />
            I'm Haroon Hayat.
          </motion.span>
          <motion.span className='smallText' variants={fadeIn('left', 'tween', 0.4, 1)}>
            Software developer and Frontend
            <br />
            Engineer focusing on React, Javascript,
            <br />
            Web Accessibility, Design Systems,
            <br />
            and developing chrome extensions.
          </motion.span>
        </div>

        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className={css.person}>
          <motion.img variants={slideIn('up', 'tween', 0.5, 1.3)} src='./final.png' alt='reactjs developer photo' />
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className={css.experience}>
            <div className='primaryText'>1+</div>
            <div className='secondaryText'>
              <div>Years</div>
              <div>Experience</div>
              <div>as a ReactJS Developer</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('left', 'tween', 0.5, 1)} className={css.certificate}>
            <img src='./certificate.png' alt='' />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
