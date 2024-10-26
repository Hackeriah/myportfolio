import React from "react";
import styles from './Welcome.module.css';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ChatButton from "../../chatButton/chatButton";

export default function Welcome() {
  return (
    <div className={styles.main}>
      <div className={styles.message}>
        <h4>Welcome to</h4>
        <h1>Isaiah Samuel</h1>
        <h3>SOFTWARE ENGINEER // SECURITY ENGINEER</h3>
      </div>
      <div className={styles.socials}>
        <div className={styles.icons}>
            <FaGithub  className={styles.github} />
            <FaTwitter className={styles.twitter}/>
        </div>
        <div>
            <ChatButton/>
        </div>
      </div>
    </div>
  );
}
