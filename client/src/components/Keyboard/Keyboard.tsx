'use client';
import styles from './styles.module.scss';
import keyNotes from './notes.json';
import KeyNote from './KeyNote';
import { useState, useEffect } from 'react';
import LangKey from './LangKey';
import SpacebarKey from './SpacebarKey';
import BackspaceKey from './BackspaceKey';
import EnterKey from './EnterKey';

interface KeyboardProps {
    level: number;
    isStartExercise: boolean;
    setTyping: (value: string) => void;
    typing: string;
    word: string;
    isWordDone: boolean;
    setIsWordDone: (value: boolean) => void;
}

export default function Keyboard(props: KeyboardProps) {

    const languages = ["עב", "en", "EN", "12?"];
    const [language, setLanguage] = useState(0);
    const [isEnterClicked, setIsEnterClicked] = useState(false);

    const changeLanguage = () => {
        setLanguage((language +1) %languages.length)
    }
    useEffect(() => {
        if(isEnterClicked) {
            console.log("Enter clicked? ", isEnterClicked);
            props.setIsWordDone(true);
            setIsEnterClicked(false);
        }
    }, [isEnterClicked, props])
    

    return (
        <section className={styles.container}>
            {
                keyNotes.map((keyNote) => (
                    <KeyNote 
                        level={props.level}
                        isStartExercise={props.isStartExercise}
                        key={keyNote.noteId}
                        noteId={keyNote.noteId}
                        value={keyNote.value[language]}
                        language={language}
                        setTyping={props.setTyping}
                        typing={props.typing}
                        word={props.word}
                    />
                ))
            }

            <SpacebarKey 
                noteId='keyNoteSpace'
                value=' '
                setTyping={props.setTyping}
                typing={props.typing}
            />

            <BackspaceKey 
                noteId='keyNoteBackspace'
                value='BackSpace'
                setTyping={props.setTyping}
                typing={props.typing}
            />
            <EnterKey 
                noteId='keyNoteEnter'
                value='Enter'
                setTyping={props.setTyping}
                typing={props.typing}
                setIsEnterClicked={setIsEnterClicked}
            />

            <LangKey
                key='keyLang' 
                noteId='keyLang' 
                value={languages[(language+1)%languages.length]}
                changeLanguage={changeLanguage}
            />

        </section>
    )
}