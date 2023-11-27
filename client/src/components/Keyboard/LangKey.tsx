'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

interface KeyProps {
    value: string;
    noteId: string;
    changeLanguage?: () => void;
}
export default function LangKey(props: KeyProps) {
    const { keyNote, keyNoteSpace, keyNoteBackspace, keyNoteEnter, keyLang } = styles;
 
    const noteId = props.noteId;

    return (
        <button 
            className={`${keyNote}`} 
            id={ noteId === "keyLang" ? keyLang : noteId }
            value={props.value}
            onClick={props.changeLanguage}         
        >
            {props.value}
        </button>
    )
}