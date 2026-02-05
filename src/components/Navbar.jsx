import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? styles.active : styles.navText)}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({isActive}) => (isActive ? styles.active : styles.navText)}
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        className={({isActive}) => (isActive ? styles.active : styles.navText)}
      >
        About me
      </NavLink>
      <NavLink
        to="/contacts"
        className={({isActive}) => (isActive ? styles.active : styles.navText)}
      >
        Contacts
      </NavLink>
      <NavLink
        to="/news"
        className={({isActive}) => (isActive ? styles.active : styles.navText)}
      >
        News
      </NavLink>
    </div>
  );
}
