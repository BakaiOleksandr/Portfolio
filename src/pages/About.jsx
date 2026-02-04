import styles from './About.module.css';

export default function About() {
  return (
    // Main
    <div className={styles.aboutMainContainer}>
      {/* second container */}
      <div className={styles.aboutContainer}>
        {/* I am */}
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader}>About me</div>
          <p>
            I am a frontend developer with a strong interest in building clean,
            responsive, and user-friendly web interfaces.
          </p>

          {/* <p>
            I work with HTML, CSS, JavaScript, and React, focusing on modern,
            well-structured, and maintainable code.
          </p> */}
        </div>
        {/* Technologies */}
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader2}>Technologies:</div>
          <ul className={styles.aboutList}>
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React, Vite, Redux</li>
            <li>Node.js, MongoDB</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        {/* Languages */}
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader2}>Languages:</div>
          <ul className={styles.aboutList}>
            <li>English: Intermediate</li>
            <li>Dutch: Beginner</li>
          </ul>
        </div>
        {/* Ironhack */}
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader}>Study at IronHack</div>
          <p>
            In November 2025 I have completed a{' '}
            <strong>Fullstack Web Development</strong> course at Ironhack, where
            I gained hands-on experience working on real projects and
            strengthening my frontend and backend skills. You can view my
            certificate here.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <a
            href="https://www.credential.net/dd7c08cf-7c02-47f9-910e-6e8cb2ce0fe2#acc.rTIq9ASC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.certificateImg}
              alt="Ironhack certificate"
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/168060950"
            />
          </a>
        </div>

        {/* 2D */}
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader}>Design experience</div>
          <p>
            In addition I have experience working with 2D graphic design tools,
            which help me better understand design principles and work
            effectively with visual assets.
          </p>
        </div>
        {/* Additional skills */}
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutHeader2}>Design skills:</div>
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
