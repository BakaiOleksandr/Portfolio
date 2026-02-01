import {NavLink} from 'react-router-dom';
import styles from'./Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/news">News</NavLink>
    </div>
  );
}
