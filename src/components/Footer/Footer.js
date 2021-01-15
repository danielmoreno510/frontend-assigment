import React from "react";

import styles from "./styles";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.containerLogo}>
        <img style={styles.logo} src={logo} />
      </div>
      <div style={styles.sectionsFlex}>Preguntas Frecuentes</div>
      <div style={styles.sectionsFlex}>Contáctos</div>
      <div style={styles.sectionsFlex}>Información</div>
      <div style={styles.sectionsFlexCopyright}>
        DocRed © 2019. Todos los derechos reservados
      </div>
    </div>
  );
};

export default Footer;
