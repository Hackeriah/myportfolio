import styles from "./HireMe.module.css";

export default function HireMe() {
  return (
    <div className={styles.main}>
      <div className={styles.texts}>
        <h3>HIRE ME</h3>
        <h1>Tell me your plan</h1>
      </div>

      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea name="" id="" placeholder="Message..."></textarea>
        <div className={styles.arrowM}>
          <div className={styles.arrow}>
            <button>SEND</button>
          </div>
        </div>
      </form>
    </div>
  );
}
