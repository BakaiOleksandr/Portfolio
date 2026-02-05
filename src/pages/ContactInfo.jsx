import style from './Contacts.module.css';
export default function ContactInfo() {
  return (
    <div className={style.contactMainContainer}>
      <div className={style.secondContainer}>
        <div className={style.contactsHeader}>Contacts</div>

        <p>
          Email: <span>saniabakay@gmail.com</span>
        </p>
        <p>
          Location: <span>Almere, Flevoland, The Netherlands</span>
        </p>
        <div className={style.contactButtons}>
          <a
            href="https://www.linkedin.com/in/oleksandr-bakai-9068a4389/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="LinkedInLogo" src="LinkedIn.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
