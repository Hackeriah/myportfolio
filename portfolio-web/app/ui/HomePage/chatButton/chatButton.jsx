import styles from './chatButton.module.css'


export default function ChatButton() {
  return (
    <div className={styles.main}>
        <button className={styles.btn}>
            <p>LET'S</p>
            <p>TALK</p>
        </button>
    </div>
  )
}
