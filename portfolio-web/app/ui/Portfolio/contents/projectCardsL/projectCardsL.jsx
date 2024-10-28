import styles from "./projectCardsL.module.css";
import Link from "next/link";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { IoLink } from "react-icons/io5";

export default function ProjectCardsL({text1,text2,text3,img}) {
  
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <Image layout="responsive" src={img} width={700} height={375} alt="" />
      </div>
      <div className={styles.rContainer}>
        <div className={styles.textTitle}>
          <h5>{text1}</h5>
          <p>{text2}</p>
        </div>
        <div className={styles.textContent}>
          <p>
          {text3}
          </p>
        </div>
        <div className={styles.socials}>
        <Link href='https://github.com/Hackeriah'><FiGithub className={styles.github}/></Link>
        <Link href='https://www.linkedin.com/in/cyberiah/'><IoLink className={styles.link}/></Link>
        </div>
      </div>
    </div>
  );
}
