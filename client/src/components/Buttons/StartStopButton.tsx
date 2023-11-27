import styles from './styles.module.scss';
import Image from 'next/image';
 
interface Props {
    onClick: () => void;
    icon: string
}
export default function StartStopButton({onClick, icon}: Props) {
    


    return (
        <button className={styles.shareBtn} onClick={onClick}>
            <Image className={styles.shareIcon} src={icon} alt='התחלת או סיום משימה' />
        </button>
    )
}