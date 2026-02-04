import styles from './MyProjects.module.css';

export default function MyProjects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsTextConteiner}>
        {/* Book Library app */}
        <div className={styles.projectsHeader}>
          Book Library app
          <br />
          (React, Redux)
        </div>
        <p className={styles.text}>
          After finishing the bootcamp, I continued learning and completed a
          React & Redux course on Udemy. As a result, I created a Book Library
          app using React & Redux.
        </p>
        <a href="https://booklibraryappredux.netlify.app/" target="_blank">
          https://booklibraryappredux.netlify.app/
        </a>
      </div>
      <div className={styles.projectsTextConteiner}>
        {/* Language Quiz Game 2.0 */}
        <div className={styles.projectsHeader}>
          Language Quiz Game 2.0
          <br />
          (Vite, Node.js, MongoDB, NPM)
        </div>
        <p className={styles.text}>
          A language quiz game where the player translates words from one
          language to another. Words are loaded from a backend database. The
          player sees one word at a time and must type the correct translation.
          Project is still in progress — I created multi-language functionality
          myself using languages-context and JSON files, no npm translators yet.
        </p>
        <a href="https://meek-kangaroo-b79b57.netlify.app/" target="_blank">
          https://meek-kangaroo-b79b57.netlify.app/
        </a>
      </div>
      <div className={styles.projectsTextConteiner}>
        {/* Language Quiz */}
        <div className={styles.projectsHeader}>
          Language Quiz
          <br />
          (Vanilla JS, HTML, CSS)
        </div>
        <p className={styles.text}>
          Quiz for translation words in different languages by typing them. With
          10 minutes timer. Also player will see some animation according to
          score and at the end - words to memorise. This game is useful for
          myself because I am currently learning Dutch language.
        </p>
        <a href="https://bakaioleksandr.github.io/" target="_blank">
          https://bakaioleksandr.github.io/
        </a>
      </div>
      <div className={styles.projectsTextConteiner}>
        {/* URL manager */}
        <div className={styles.projectsHeader}>
          URL manager
          <br />
          (Vanilla JS, HTML, CSS)
        </div>
        <p className={styles.text}>
          This is something that I often use for websites navigation. Just
          create a folder and then add there a copied links and name them.
        </p>
        <a
          href="https://bakaioleksandr.github.io/Links-Manager/"
          target="_blank"
        >
          https://bakaioleksandr.github.io/Links-Manager/
        </a>
      </div>
      <div className={styles.projectsTextConteiner}>
        {/* Weather App */}
        <div className={styles.projectsHeader}>
          Weather App
          <br />
          (JS, API, React)
        </div>
        <p className={styles.text}>
          To better understand API requests and responses, I created a simple
          Weather App
        </p>
        <a href="https://alexb-weather-app.netlify.app/" target="_blank">
          https://alexb-weather-app.netlify.app/
        </a>
      </div>

      <div className={styles.projectsTextConteiner}>
        {/* Very simple ToDo app */}
        <div className={styles.projectsHeader}>
          Very simple ToDo app
          <br />
          (Vanilla JS, HTML, CSS)
        </div>
        <p className={styles.text}>
          A simple ToDo app to practice DOM manipulation.
        </p>
        <a
          href="https://bakaioleksandr.github.io/TODO-VanillaJS/"
          target="_blank"
        >
          https://bakaioleksandr.github.io/TODO-VanillaJS/
        </a>
      </div>
    </div>
  );
}
