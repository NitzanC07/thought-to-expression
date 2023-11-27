'use client';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import shareIcon from '@/images/icons/share-icon.svg';
import noteIcon from '@/images/icons/note-icon.svg';
import addNoteIcon from '@/images/icons/plus-icon.svg';
import CircleButton from '@/components/Buttons/CircleButton';
import Link from 'next/link';

export default function FreeWritingPage() {

  const [text, setText] = useState('');

  const shareText = () => {
    console.log(`Share notebook: ${text}`);    
  }

  const notebooksPage = () => {
    console.log("Notebooks page");
  }

  const saveNotebooks = () => {
    console.log(`Save Notebook: ${text}`);
  }
  
  return (
    <section className={styles.container}>
      <div className={styles.head}>
        <h2>כתיבה חופשית</h2>
        <div className={styles.notebookNavigate}>
          <Link className={styles.link} href='/notebooks'>
            <CircleButton icon={noteIcon} description='מחברות' />
          </Link>
          <CircleButton onClick={saveNotebooks} icon={addNoteIcon} description="שמירת מחברת" />
          <CircleButton onClick={shareText} icon={shareIcon} description="מחברות" />
        </div>
      </div>

      <div className={styles.notebookContainer}>
        <textarea 
          className={styles.notebook}
          placeholder='כאן המקום לכתוב כל מה שבלב ובראש...'
          value={text || ''}
          onChange={(e) => setText(e.target.value)}
        >
          
        </textarea>
      </div>
    </section>
  )
}