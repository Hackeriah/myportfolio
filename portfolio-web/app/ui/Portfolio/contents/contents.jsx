import styles from "./contents.module.css";
import ProjectCardsL from "./projectCardsL/projectCardsL";
import ProjectCardsR from "./projectCardsR/projectCardsR";
import Onp from "./onp/onp";

export default function Contents() {
  const dataOne = {
    img: "/images/pc1.png",
    text1: "Featured Project",
    text2: "Disburse Website",
    text3:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. ",
  };

  const dataTwo = {
    img: "/images/pc2.png",
    text1: "Featured Project",
    text2: "Rexdreams.com",
    text3:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class",
  };

  const dataThree = {
    img: "/images/pc3.png",
    text1: "Featured Project",
    text2: "Disburse Website",
    text3:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. ",
  };

  const dataFour = {
    img: "/images/pc1.png",
    text1: "Featured Project",
    text2: "Disburse Website",
    text3:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. ",
  };

  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <button className={styles.lft}>Projects</button>
        <button>Titbits</button>
      </div>

      <div> 
      <ProjectCardsL
        img={dataOne.img}
        text1={dataOne.text1}
        text2={dataOne.text2}
        text3={dataOne.text3}
      />

      <ProjectCardsR
        img={dataTwo.img}
        text1={dataTwo.text1}
        text2={dataTwo.text2}
        text3={dataTwo.text3}
      />

<ProjectCardsL
        img={dataThree.img}
        text1={dataThree.text1}
        text2={dataThree.text2}
        text3={dataThree.text3}
      />

<ProjectCardsR
        img={dataTwo.img}
        text1={dataTwo.text1}
        text2={dataTwo.text2}
        text3={dataTwo.text3}
      />

</div>
<Onp/>
    </div>
  );
}
