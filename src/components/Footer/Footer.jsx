import styles from './Footer.module.css';
import linkedinIcon from '../../images/icons/linkedin.svg';
import mailIcon from '../../images/icons/mail.svg';
function Footer() {
const linkedIn = "https://www.linkedin.com/in/nataliia-hanzhuha-41a058242/";
  return <footer className={styles.footer}>
    <p className={styles.text}>
      <span>Powered by</span>
      <a href={linkedIn}
         className={styles.link}>Nata Hanzhuha</a>
    </p>


    <a href={linkedIn}>
      <img src={linkedinIcon}
           width={24}
           height={24}
           alt="linked in logo"/>
    </a>

    <a href="mailto:nataliiahanzhuha@gmail.com">
      <img src={mailIcon}
           width={24}
           alt="mail logo"/>
    </a>
  </footer>;
}

export default Footer;
