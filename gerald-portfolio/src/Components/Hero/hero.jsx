import React from 'react'
import image from '../../assets/image1.jpg';
import styles from './index.module.css';

const Hero = () => {
  return (
    <div>
        <img src={image} className={styles.gerd}/>
    </div>
  )
}

export default Hero;