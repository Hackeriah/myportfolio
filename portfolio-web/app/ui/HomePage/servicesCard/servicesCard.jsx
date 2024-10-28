import styles from './servicesCard.module.css'
import Image from 'next/image';



export default function ServicesCard({img,title,content, mt}) {
  
  return (
    <div style={{marginTop:`${mt}`}} className={styles.main}>
      <Image src={img} width={120} height={120} alt=''/>
      <p className={styles.p}>{title}</p>
      <p className={styles.content}>{content} </p>
      </div>
  )
}
