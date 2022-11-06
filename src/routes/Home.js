import React from 'react';
import banner from '../images/hero.jpg';
import styles from './styles/home.module.css';
function Home() {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="Tools Emporium" />
    </div>
  );
}

export default Home;