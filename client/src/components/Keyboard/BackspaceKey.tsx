'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import BackspaceIcon from '@/images/icons/keyboard_backspace.svg';
import Image from 'next/image';

interface KeyProps {
    value: string;
    noteId: string;
    setTyping: (value: string) => void;
    typing: string;
}

export default function BackspaceKey(props: KeyProps) {
    const { keyNote, keyNoteBackspace } = styles;
 
    const noteId = props.noteId;

    const removeLetter = () => {
        props.setTyping(props.typing.slice(0, props.typing.length-1));
    }

    return (
        <button 
            className={`${keyNote}`} 
            id={ noteId === "keyNoteBackspace" ? keyNoteBackspace : noteId }
            value={props.value}
            onClick={removeLetter}
        >
            <Image className={styles.keynoteIcon} src={BackspaceIcon} alt='Backspace key' />
        </button>
    )
}