'use client'
import { useEffect, useState, useRef, FormEvent } from 'react';
import styles from './styles.module.scss'
import addPerson from '@/images/icons/add-person.svg';
import Image from 'next/image';
import { Speaker } from '@/app/conversation/page';

interface Props {
  speakers: Speaker[];
  setSpeakers: (speakers: Speaker[]) => void;
}

export default function SpeakersBox({speakers, setSpeakers}: Props ) {

  const [speakerName, setSpeakerName] = useState('');
  const [speakerId, setSpeakerId] = useState(1);

  // This part responsible for open and close the form for adding new speaker.
  const newSpeakerInput = useRef<HTMLInputElement>(null);
  const [isOpenNewSpeaker, setIsOpenNewSpeaker] = useState(false);
  useEffect(() => {
    if (isOpenNewSpeaker && newSpeakerInput.current) {
      isOpenNewSpeaker && newSpeakerInput.current.focus();
    }
  },[isOpenNewSpeaker])
  
  const addSpeakerOpen = () => {
    setIsOpenNewSpeaker(!isOpenNewSpeaker);
  }

  // This function is responsible for changing activate speaker in conversationData.json to true.
  const activateSpeaker = (id: number) => { 
    const newSpeakers = speakers.map((speaker) => {
      return {
        ...speaker,
        activate: speaker.id === id
      }
    });
    setSpeakers(newSpeakers);
  }

  // This function is responsible for adding new speaker to conversationData.json file.
  const createNewSpeaker = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hebrewLettersPattern = /^[א-ת-\s]+$/;
    if (!speakerName || !hebrewLettersPattern.test(speakerName)) {
      alert("נא להכניס שם פרטי בעברית.")
      return;
    }
    setSpeakers([...speakers, {"name": speakerName, "activate": false, "id": speakerId}])
    setSpeakerId(speakerId+1);
    setSpeakerName('');
    setIsOpenNewSpeaker(false);
  }

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>דוברים:</h2>
        <ul className={styles.speakersList}>
          {
            speakers.map((speaker: Speaker) => (
              <li className={styles.speaker} key={speaker.id}>
                <button 
                  className={styles.speakerBtn}
                  onClick={() => activateSpeaker(speaker.id)}
                >
                  {speaker.name}
                </button>
              </li>

            ))
          }
        </ul>
      </div>
      <form 
        className={styles.addSpeakerContainer}
        onSubmit={createNewSpeaker}
      >
        <button 
          className={styles.addSpeakerBtn}
          type='button'
          onClick={addSpeakerOpen}
          disabled={speakers.length < 4 ? false : true}
          style={speakers.length >=4 ? {'backgroundColor': '#aaa'} : {'backgroundColor': '#fff'}}
        >
          <Image className={styles.addPersonIcon} src={addPerson} alt='Add speaker' />
        </button> 
        { (speakers.length >= 4) && <p className={styles.tagAddPerson}>לא ניתן לצרף עוד דוברים</p> }
        {
          isOpenNewSpeaker && 
          <>
            <input 
              className={styles.addSpeakerInput}
              type='text'
              ref={newSpeakerInput}
              minLength={2}
              maxLength={8}
              placeholder='שם פרטי'
              value={speakerName || ''}
              onChange={(e) => setSpeakerName(e.target.value)}
            />
            <button 
              className={styles.addSpeakerSubmit}
              type='submit'
            >
              הוסף
            </button>
          </>
        }
      </form>
    </section>
  )
}
