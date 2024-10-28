import styles from "./Services.module.css";
import ServicesCard from "../servicesCard/servicesCard";

export default function Services() {
  const uiuxData = {
    img: "/images/uiux.png",
    title: "UI/UX Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum amet id atque temporibus dolorem tempora unde nisi alias quos. Natus ea temporibus quis nisi et nesciunt at sequi aliquam",
  };

  const webdevData = {
    img: "/images/wdev.png",
    title: "UI/UX Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum amet id atque temporibus dolorem tempora unde nisi alias quos. Natus ea temporibus quis nisi et nesciunt at sequi aliquam",
  };
  const appdevData = {
    img: "/images/adev.png",
    title: "UI/UX Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum amet id atque temporibus dolorem tempora unde nisi alias quos. Natus ea temporibus quis nisi et nesciunt at sequi aliquam",
  };

  const cyberData = {
    img: "/images/mldev.png",
    title: "UI/UX Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum amet id atque temporibus dolorem tempora unde nisi alias quos. Natus ea temporibus quis nisi et nesciunt at sequi aliquam",
  };
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <h1>Services</h1>
        <h3>Building digital product with better experience</h3>
      </div>
      {/* <div className={styles.mContent}> */}
        <div className={styles.content}>
          <div className={styles.absCont}>
            <ServicesCard
            mt='20px'
              img={uiuxData.img}
              title={uiuxData.title}
              content={uiuxData.content}
            />
            <ServicesCard
              img={webdevData.img}
              title={uiuxData.title}
              content={webdevData.content}
            />
            <ServicesCard
              img={appdevData.img}
              title={appdevData.title}
              content={appdevData.content}
            />
            <ServicesCard
              mt='20px'
              img={cyberData.img}
              title={cyberData.title}
              content={cyberData.content}
            />
          </div>
        </div>
      </div>
    // </div>
  );
}
