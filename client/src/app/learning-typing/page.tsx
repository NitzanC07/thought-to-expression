import styles from './page.module.scss';
import Link from 'next/link';

export default function LearningTypingPage() {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>אימון הקלדה עצמאית</h2>
        <p>הקדמה</p>
          <ul className={styles.navigator}>
            <li className={styles.levelItem}>
              <div className={styles.levelName}>1</div>
              <div className={styles.textBox}>
                <h3 className={styles.titleLevel}>הכרת המקלדת</h3>
                <p className={styles.descriptionLevel}>הקלדת אותיות בודדות, היכרות עם המיקום של כל אות על גבי המקלדת חלקית.</p>
              </div>
              <Link className={styles.stageLink} href='/learning-typing/level1'>
                <button className={styles.stageButton}>התחל</button>
              </Link>
            </li>
            <li className={styles.levelItem}>
              <div className={styles.levelName}>2</div>
              <div className={styles.textBox}>
                <h3 className={styles.titleLevel}>הקלדת אותיות בודדות</h3>
                <p className={styles.descriptionLevel}>זיהוי של אות אחת בין כמה אפשרויות והקלדתה על המסך, בעזרת מקלדת חלקית.</p>
              </div>
              <Link className={styles.stageLink} href='/learning-typing/level2'>
                <button className={styles.stageButton}>התחל</button>
              </Link>
            </li>
            <li className={styles.levelItem}>
              <div className={styles.levelName}>3</div>
              <div className={styles.textBox}>
                <h3 className={styles.titleLevel}>הקלדת מילים קצרות - חלק 1</h3>
                <p className={styles.descriptionLevel}>הקלדת מילים בנות שתי אותיות בהתאם למילה מוכתבת מראש, ובסדר הנכון של האותיות עם מקלדת חלקית.</p>
              </div>
              <Link className={styles.stageLink} href='/learning-typing/level3'>
                <button className={styles.stageButton}>התחל</button>
              </Link>
            </li>
            <li className={styles.levelItem}>
              <div className={styles.levelName}>4</div>
              <div className={styles.textBox}>
                <h3 className={styles.titleLevel}>הקלדת מילים קצרות - חלק 2</h3>
                <p className={styles.descriptionLevel}>הקלדת מילים בנות שתי אותיות בהתאם למילה מוכתבת מראש, בסדר הנכון, עם מקלדת חלקית</p>
              </div>
              <Link className={styles.stageLink} href='/learning-typing/level4'>
                <button className={styles.stageButton}>התחל</button>
              </Link>
            </li>
          </ul>
       </div>
    </section>
  )
}