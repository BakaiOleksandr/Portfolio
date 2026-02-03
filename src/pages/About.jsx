import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutMainContainer}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutTextContainer}>
          <p>
            I am a frontend developer with a strong interest in building clean,
            responsive, and user-friendly web interfaces.
          </p>

          <p>
            I work with HTML, CSS, JavaScript, and React, focusing on modern,
            well-structured, and maintainable code.
          </p>
        </div>

        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader}>Technologies:</div>
          <ul className={styles.aboutList}>
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React, Vite, Redux</li>
            <li>Node.js, MongoDB</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader}>Languages:</div>
          <ul className={styles.aboutList}>
            <li>English: Intermediate</li>
            <li>Dutch: Beginner</li>
          </ul>
        </div>

        <div className={styles.aboutTextContainer}>
          I have completed a web development course at Ironhack, where I gained
          hands-on experience working on real projects and strengthening my
          frontend skills. You can view my certificate here.
        </div>

        <div className={styles.aboutTextContainer}>
          In addition to frontend development, I have experience working with 2D
          graphic design tools, which help me better understand design
          principles and work effectively with visual assets.
        </div>

        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader}>Additional skills:</div>
          <ul className={styles.aboutList}>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Dialux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
