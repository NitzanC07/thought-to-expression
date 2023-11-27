import styles from './styles.module.scss';
import Link from "next/link";

interface Props {
  toggleNavBar: () => void;
}
export default function NavigationBar({toggleNavBar}: Props) {

  return (
    <nav className={styles.navBar}>
        <Link className={styles.link} href='/' onClick={toggleNavBar}>
          <button className={styles.button}>בית</button>
        </Link>
        <Link className={styles.link} href='/conversation' onClick={toggleNavBar}>
          <button className={styles.button}>שיחה</button>
        </Link>
        <Link className={styles.link} href='/free-writing'  onClick={toggleNavBar}>
          <button className={styles.button}>כתיבה חופשית</button>
        </Link>
        <Link className={styles.link} href='/learning-typing' onClick={toggleNavBar}>
          <button className={styles.button}>אימון הקלדה</button>
        </Link>
        <Link className={styles.link} href='/about' onClick={toggleNavBar}>
          <button className={styles.button}>אודות</button>
        </Link>
    </nav>
  )
}