'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import EnterIcon from '@/images/icons/keyboard_return.svg';
import Image from 'next/image';

interface KeyProps {
    value: string;
    noteId: string;
    setTyping: (value: string) => void;
    typing: string;
    setIsEnterClicked: (value: boolean) => void;
}

export default function EnterKey(props: KeyProps) {
    const { keyNote, keyNoteEnter } = styles;
 
    const enterClicked = () => {
        // props.setTyping(props.typing + "\n");
        props.setIsEnterClicked(true);
    }

    return (
        <button 
            className={`${keyNote}`} 
            id={keyNoteEnter}
            value={props.value}
            onClick={enterClicked}
        >
            <Image className={styles.keynoteIcon} src={EnterIcon} alt='Enter key' />
        </button>
    )
}