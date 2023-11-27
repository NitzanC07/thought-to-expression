'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

interface NoteProps {
    level: number;
    isStartExercise: boolean;
    value: string;
    noteId: string;
    language: number;
    setTyping: (value: string) => void;
    typing: string;
    word: string;
}
export default function KeyNote(props: NoteProps) {
    const { keyNote } = styles;
    
    const noteId = props.noteId;
    const [clickedCounter, setClickedCounter] = useState(0);
    const [otherLetters, setOtherLetters] = useState([]);

    const typeValue = () => {
        if (props.word && props.word.includes(props.value)) {
            props.setTyping(props.typing + props.value);
        }
        setClickedCounter(clickedCounter+1);
        console.log(clickedCounter);
    }

    // TODO: Create a function that get parameters and return an appropriate styling object.
    // const getStylingKey = (word: string, level: number, isStartExercise: boolean, value: string, clickedCounter: number) => {
    //     if (word && isStartExercise && level <= 2 && word.includes(value)) {
    //         return {'visibility' : 'hidden'};
    //     }
    //     else if (word && level === 3 && isStartExercise &&  word.includes(value)) {
    //         return {'backgroundColor': '#ff0', 'color': '#000'};
    //     }
    //     else if (word && isStartExercise && clickedCounter === 1 && !word.includes(value)) {
    //         return {'backgroundColor' : '#ffffff99', 'color': '#888', 'boxShadow': '-3px 3px 5px #999'}
    //     }
    //     else if (word && isStartExercise && clickedCounter === 2 && !word.includes(value)) {
    //         return {'backgroundColor' : '#ffffff66', 'color': '#777', 'boxShadow': '-2px 2px 5px #777'}
    //     }
    //     else if (word && isStartExercise && clickedCounter === 3 && !word.includes(value)) {
    //         return {'backgroundColor' : '#ffffff33', 'color': '#666', 'boxShadow': '-1px 1px 5px #555'}
    //     }
    //     else if (word && isStartExercise && clickedCounter === 4 && !word.includes(value)) {
    //         return {'visibility' : 'hidden'}
    //     }
    //     else {
    //         return {'backgroundColor' : '#fff', 'color': '#555'}
    //     }
    // }

    useEffect(() => {
        setClickedCounter(0);
    }, [props.word])

    return (
        <button 
            className={`${keyNote}`} 
            id={noteId}
            value={props.value}
            onClick={typeValue}
            style={
                props.word && props.level <= 2 && props.isStartExercise && !props.word.includes(props.value) ? {'visibility' : 'hidden'} : 
                props.word && props.isStartExercise && clickedCounter === 1 && !props.word.includes(props.value) ? {'backgroundColor' : '#ffffff99', 'color': '#888', 'boxShadow': '-3px 3px 5px #999'} : 
                props.word && props.isStartExercise && clickedCounter === 2 && !props.word.includes(props.value) ? {'backgroundColor' : '#ffffff66', 'color': '#777', 'boxShadow': '-2px 2px 5px #777'} : 
                props.word && props.isStartExercise && clickedCounter === 3 && !props.word.includes(props.value) ? {'backgroundColor' : '#ffffff33', 'color': '#666', 'boxShadow': '-1px 1px 5px #555'} : 
                props.word && props.isStartExercise && clickedCounter === 4 && !props.word.includes(props.value) ? {'visibility' : 'hidden'} : 
                props.word && props.level === 3 && props.isStartExercise &&  props.word.includes(props.value) ? {'backgroundColor' : '#ff0', 'color': '#000'} : 
                {'backgroundColor' : '#fff', 'color': '#555'}
            }
        >
            {props.value}
        </button>
    )
} 