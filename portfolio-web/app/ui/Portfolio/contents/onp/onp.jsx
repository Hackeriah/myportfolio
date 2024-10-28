'use client'
import { useState } from "react";
import styles from "./onp.module.css";
import { FiGithub } from "react-icons/fi";
import { IoLink } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import Link from "next/link";

export default function Onp() {
  const projects = [
    { id: 1, title: "SafeWatch", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptPorem ipsum " },
    { id: 2, title: "Ecommerce", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 3, title: "Project 3", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 4, title: "Project 4", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 5, title: "Project 5", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 1, title: "Project 1", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 2, title: "Project 2", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 3, title: "Project 3", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 4, title: "Project 4", description: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 5, title: "Project 5", description: "DPorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 1, title: "Project 1", description: "DPorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
    { id: 2, title: "Project 2", description: "DPorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  return (
    <div className={styles.main}>
      <div>
        <p className={styles.title0}>Other Noteworthy Projects</p>
        <p className={styles.title1}>View the archive</p>
      </div>

      <div className={styles.portfolioContainer}>
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectLinks}>
                <div><FaRegFolder className={styles.folder} /></div>
                <div className={styles.socials}>
                    <Link href='https://github.com/Hackeriah'><FiGithub className={styles.sm}/></Link>
                   <Link href='https://www.linkedin.com/in/cyberiah/'> <IoLink className={styles.sm}/></Link>
                </div>
            </div>
            <div className={styles.texts}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
          </div>
        ))}
        
      </div>
      {visibleProjects < projects.length && (
          <button onClick={showMoreProjects}>Show more</button>
        )}
    </div>
  );
}
