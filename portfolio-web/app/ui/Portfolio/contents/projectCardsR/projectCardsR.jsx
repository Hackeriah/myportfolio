import styles from './projectCardsR.module.css';
import Image from 'next/image';

export default function ProjectCardsR({text1,text2,text3,img}) {
  return (
    <div className={styles.main}>
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
          <i>github</i>
          <i>link</i>
        </div>
      </div>


      <div className={styles.img}>
        <Image layout="responsive" src={img} width={700} height={375} alt="" />
      </div>
    </div>
  )
}
