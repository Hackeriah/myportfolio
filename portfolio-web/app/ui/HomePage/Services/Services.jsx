import styles from './Services.module.css';
import ServicesCard from '../../servicesCard/servicesCard'

export default function Services() {
  return (
    <div className={styles.main}>
        <div className={styles.titles}>
            <h1>Services</h1>
            <h3>Building digital product with better experience</h3>
        </div>
        <div className={styles.mContent}>
        <div className={styles.content}>
            <ServicesCard/>
        </div>
        </div>
    </div>
  )
}
