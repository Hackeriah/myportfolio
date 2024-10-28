import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/"><Image className={styles.img} src="/images/logo.png" alt="" width={30} height={30} /></Link>
      </div>
      <div className={styles.links}>
        <ul>
            <li><Link className={styles.Link} href="/">Home</Link></li>
            <li><Link className={styles.Link} href="#services">Services</Link></li>
            <li><Link className={styles.Link} href="/portfolio">Portfolio</Link></li>
            <li><Link className={styles.Link} href="#hireMe">Hire Me</Link></li>
        </ul>
      </div>

      <div className={styles.button}>
        <button>Download CV</button>
      </div>
    </nav>
  );
}
