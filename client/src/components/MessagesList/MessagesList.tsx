import styles from './styles.module.scss';
import { Conversation } from '@/app/conversation/page';

interface Props {
    conversation: Conversation[];
}

function MessagesList({conversation}: Props) {
    // const conversation: Conversation[] = conversationData.conversation;

    return (
        <div className={styles.messagesBox}>
            <ul className={styles.messagesContainer}>
                {
                    conversation.map((message, i) => (
                        <li className={styles.messageContainer} key={i}>
                            <p className={styles.messageSpeaker}>{message.speaker}:</p>
                            <p className={styles.messageText}>{message.message}</p>
                            <p className={styles.messageTime}>{message.time.slice(12, 19)}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MessagesList;