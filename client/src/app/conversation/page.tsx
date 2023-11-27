'use client'
import SpeakersBox from '@/components/Speakers/SpeakersBox';
import styles from './page.module.scss';
import { WritingMessage } from '@/components/WritingMessage/WritingMessage';
import ChatBox from '@/components/ChatBox/ChatBox';
import { useState } from 'react';

export interface Conversation {
  speaker: string; 
  message: string; 
  time: string;
}

export interface Speaker {
  id: number,
  name: string,
  activate: boolean
}

export default function ConversationPage() {  

  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [conversation, setConversation] = useState<Conversation[]>([]);

  return (
    <section className={styles.container}>
      {/* <div className={styles.content}> */}
        <div className={styles.box} id={styles.boxSpeakers}>
          <SpeakersBox 
            speakers={speakers}
            setSpeakers={setSpeakers}
          />
        </div>
        <div className={styles.box} id={styles.boxWritingMessage}>
          <WritingMessage 
            speakers={speakers} 
            setConversation={setConversation} 
            conversation={conversation}
          />
        </div>
        <div className={styles.box} id={styles.boxConversation}>
          <ChatBox conversation={conversation} />
        </div>
      {/* </div> */}
    </section>
  )
}
