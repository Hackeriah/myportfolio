"use client"
import { useState } from "react";
import styles from "./contents.module.css";
import ProjectCardsL from "./projectCardsL/projectCardsL";
import ProjectCardsR from "./projectCardsR/projectCardsR";
import Onp from "./projects/onp/onp";
import Projects from "./projects/projects";
import Titbits from "./titbits/titbits";

export default function Contents() {
  const [activeButton, setActiveButton] = useState('projects');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <button className={`${styles.projectsButton} ${activeButton === 'projects' ? styles.active : ""}`} onClick={()=>{handleButtonClick('projects')}}>Projects</button>
        <button className={`${styles.titbitsButton} ${activeButton === 'titbits' ? styles.active : ""}`} onClick={()=>{handleButtonClick('titbits')}}>Titbits</button>
      </div>

      {activeButton === 'projects' && (<Projects/>)}
      {activeButton === 'titbits' && (<Titbits/>)}
      

     
      {/* <Onp /> */}
    </div>
  );
}
