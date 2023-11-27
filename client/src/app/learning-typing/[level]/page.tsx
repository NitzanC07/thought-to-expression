'use client';
import Keyboard from '@/components/Keyboard/Keyboard';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import startIcon from '@/images/icons/play_arrow.svg';
import stopIcon from '@/images/icons/stop.svg';
import CircleButton from '@/components/Buttons/CircleButton';
import words from '@/data/traningExercises/words.json';

interface WordsList {
  [key: string]: string[];
}

export default function LearningTypingLevelPage({params}: {params: {level: string}}) {  
  
  const [typing, setTyping] = useState('');
  const [activeExercise, setActiveExercise] = useState(false);
  const [isWordDone, setIsWordDone] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const level: string = params.level;

  const wordsAll: WordsList = words;
  const wordsForExercise = wordsAll[level]
   
  // Check validation of param.
  if (level.slice(0, 5) !== "level" || !Number(level.slice(5,)) ) {
    return (
      <section>
        <h2>ExpressUs | שגיאה, עמוד לא קיים</h2>
      </section>    
    )
  }
    
  const levelNumber = Number(level.slice(5,));

  const activateExercise = () => {
    setActiveExercise(!activeExercise);
  }


  if (isWordDone) {
    if (typing === wordsForExercise[currentWord]) {
      console.log("כל הכבוד");
      setIsWordDone(false);
      if (currentWord < wordsForExercise.length) {
        setCurrentWord(currentWord+1)
        setTyping('')
      }
    } else {
      console.log("נסה שנית");
      setIsWordDone(false);
      setTyping('');
    }
  }

  const alphabet = "פםןוטארקףךלחיעכגדשץתצמנהבסז"
        const randomLetter = alphabet[(Math.floor(Math.random()*alphabet.length))];
        console.log("random letter", randomLetter);
        if(wordsForExercise[currentWord] && wordsForExercise[currentWord].includes(randomLetter)) {
                        
        }


  return (
    <section className={styles.container}>
      <div className={styles.headerLevel}>
        <h2 className={styles.titleLevel}>אימון הקלדה עצמאית | שלב {levelNumber}</h2>
        <CircleButton onClick={activateExercise} icon={activeExercise ? stopIcon : startIcon} description="התחלה וסיום של פעילות" /> 
      </div>

      {
        !activeExercise ? 
          <p className={styles.textBeforeExercise}>הקדמה לקראת התרגיל</p>
         : 
         currentWord < wordsForExercise.length ? 
          <div className={styles.exercise}>
            <p className={styles.text}>הקלד: &quot;<b>{wordsForExercise[currentWord]}</b>&quot;</p>
            <div className={styles.userTypingField}>
              <p className={styles.userTyping}>{typing}</p>
            </div>

            

          </div> 
          : 
          <div>
            <p className={styles.text}>סיכום תרגיל</p>
          </div>
        }


      {
        activeExercise &&
        <Keyboard 
          level={levelNumber}
          isStartExercise={activeExercise}
          setTyping={setTyping} 
          typing={typing}
          word={wordsForExercise[currentWord]}
          isWordDone={isWordDone}
          setIsWordDone={setIsWordDone}
        />
      }
    </section>
  )
}