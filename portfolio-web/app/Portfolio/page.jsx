import Contents from "../ui/Portfolio/contents/contents";
import styles from "../ui/Portfolio/portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p>Check out some <br />things I’ve built</p>
      </div>
      <Contents/>
    </div>
  );
}
