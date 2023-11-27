'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

interface KeyProps {
    value: string;
    noteId: string;
    setTyping: (value: string) => void;
    typing: string;
}

export default function SpacebarKey(props: KeyProps) {
    const { keyNote, keyNoteSpace } = styles;
 
    const noteId = props.noteId;

    const addSpace = () => {
        props.setTyping(props.typing + props.value);
    }

    return (
        <button 
            className={`${keyNote}`} 
            id={ noteId === "keyNoteSpace" ? keyNoteSpace : noteId }
            value={props.value}
            onClick={addSpace}
        >
            {props.value}
        </button>
    )
}