import styles from './styles.module.scss';
import MessagesList from '../MessagesList/MessagesList';
import { Conversation } from '@/app/conversation/page';
import shareIcon from '@/images/icons/share-icon.svg';
import CircleButton from '@/components/Buttons/CircleButton';

interface Props {
    conversation: Conversation[];
}

export default function ChatBox({conversation}: Props) {
    
    const shareConversation = () => {
        console.log(conversation);
        
    }

    return (
    <section className={styles.container}>
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>שיחה:</h2>
            <CircleButton onClick={shareConversation} icon={shareIcon} description='שיתוף שיחה' />
        </div>
        <MessagesList conversation={conversation} />
    </section>
    )
}