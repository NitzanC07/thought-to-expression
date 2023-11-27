import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
        <p className={styles.text}>Beta version</p>
        <p className={styles.text}>מומלץ להשתמש באפליקציה בטאבלט לרוחב</p>
        <p className={styles.text}>Developed by Nitzan Cohen</p>
    </footer>
  )
}