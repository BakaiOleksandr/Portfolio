import styles from './Home.module.css';
import {Link} from 'react-router-dom';
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.avatarContainer}>
        <img src="photo.jpg" alt="Avatar" className={styles.avatar} />
      </div>
      <div className={styles.homeText}>
        <div className={styles.topText}>Hello! My name is Oleksandr. </div>
        <p>
          I specialize in creating responsive and user-friendly websites using
          HTML, CSS, JavaScript, and React. I enjoy turning ideas into
          functional, visually appealing projects.
        </p>
        <p>Feel free to explore the sections below:</p>
      </div>

      <div className={styles.homeList}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About me</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/news">News</Link>
      </div>
    </div>
  );
}
