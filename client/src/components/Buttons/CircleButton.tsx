import styles from './styles.module.scss';
import Image from 'next/image';

 
interface Props {
    onClick?: () => void;
    icon: string;
    description: string;
}
export default function CircleButton({onClick, icon, description}: Props) {
    


    return (
        <button className={styles.shareBtn} onClick={onClick}>
            <Image className={styles.shareIcon} src={icon} alt={description} />
        </button>
    )
}