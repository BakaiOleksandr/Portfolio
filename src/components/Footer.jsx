import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.myFooter}>
      <div className={styles.myInfo}>
        <p>© {year} Bakai Oleksandr</p>
      </div>
      <div className={styles.myLinks}>
        <a
          href="https://github.com/BakaiOleksandr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/oleksandr-bakai-9068a4389/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
