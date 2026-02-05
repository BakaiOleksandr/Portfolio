import {NavLink, useLocation} from 'react-router-dom';
import {useEffect, useRef} from 'react';
import {useState} from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const activeLink = navRef.current.querySelector(`.${styles.active}`);
    const underline = underlineRef.current;

    if (activeLink && underline) {
      // ❌ временно убираем transition
      if (isFirstRender) {
        underline.style.transition = 'none';
      }

      underline.style.width = `${activeLink.offsetWidth}px`;
      underline.style.transform = `translateX(${activeLink.offsetLeft}px)`;

      // ✅ включаем transition после первого рендера
      if (isFirstRender) {
        requestAnimationFrame(() => {
          underline.style.transition = '';
          setIsFirstRender(false);
        });
      }
    }
  }, [location, isFirstRender]);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? styles.active : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({isActive}) => (isActive ? styles.active : '')}
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        className={({isActive}) => (isActive ? styles.active : '')}
      >
        About me
      </NavLink>
      <NavLink
        to="/contacts"
        className={({isActive}) => (isActive ? styles.active : '')}
      >
        Contacts
      </NavLink>
      <NavLink
        to="/news"
        className={({isActive}) => (isActive ? styles.active : '')}
      >
        News
      </NavLink>

      <span ref={underlineRef} className={styles.underline} />
    </nav>
  );
}
