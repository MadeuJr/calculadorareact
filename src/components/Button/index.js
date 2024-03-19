import styles from './styles.module.css';

export default function Button({ label , clickAction}) {
    
    return <div className={styles.button} onClick={clickAction}>{label}</div>;
}
