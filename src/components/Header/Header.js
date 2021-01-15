import React from "react";

import styles from './styles'
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import home from '../../assets/images/home.png'
import settings from '../../assets/images/settings.png'

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sectionsFlex}>
        <div style={styles.containerLogo}>
          <img style={styles.logo} src={logo}/>
        </div>
        <div style={styles.searchContainer}>
          <img style={styles.search} src={search}/>
          <input style={styles.input}/>
        </div>
        <div style={styles.sectionsFlex}>
          <img style={styles.home} src={home}/>
          <div>Inicio</div>
        </div>
      </div>
      <div style={styles.settings}>
        <img style={styles.imageSettings} src={settings} />
      </div>
    </div>
  );
};

export default Header;
