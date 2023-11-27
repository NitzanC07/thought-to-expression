'use client'
import styles from './styles.module.scss'
import { useState, useRef, FormEvent, useEffect } from 'react';
import Message from '@/types/types';
import { Conversation, Speaker } from '@/app/conversation/page';

interface Props {
    speakers: Speaker[]
    setConversation: (conversation: Conversation[]) => void;
    conversation: Conversation[];
}
export function WritingMessage({speakers, setConversation, conversation}: Props) {

    const newMessageInput: any = useRef<HTMLInputElement>(null);
    const [currentSpeakerName, setCurrentSpeakerName] = useState("דובר");

    const [newMessage, setNewMessage] = useState<Message>({
        speaker: "",
        message: "",
        time: "",
    });
    
    useEffect(() => {
        const currentSpeaker = speakers.find((speaker: Speaker) => speaker.activate === true);
        if (currentSpeaker) {
            setCurrentSpeakerName(currentSpeaker.name);
        }
        
        newMessageInput.current.focus();
    },[speakers]);

    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if the message is not empty.
        if (newMessage.message.length < 1) {
            alert("אי אפשר לשלוח הודעה ריקה.");
            return;
        }

        // Send the new message data to json file of all the conversation data.
        setConversation([...conversation, newMessage]);

        // Return the fields to the defult values.
        setNewMessage({...newMessage, speaker: '', message: ''});
    }

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={sendMessage}>
                <div className={styles.speaker}>
                    <h2 className={styles.speakerName}>{currentSpeakerName || "דובר"}: </h2>
                    <input 
                        className={styles.messageInput} 
                        type='text' 
                        ref={newMessageInput}
                        value={newMessage.message || ''}
                        onChange={(e) => 
                            setNewMessage({ 
                                time: new Date().toLocaleString(), 
                                speaker: currentSpeakerName, 
                                message: e.target.value})
                            }
                        minLength={1}
                        placeholder='מה את/ה רוצה לומר?'
                    />
                </div>
                <button className={styles.sendMessageBtn} type='submit'>שלח</button>
            </form>
        </section>
    )
}