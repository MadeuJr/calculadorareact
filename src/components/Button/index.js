import styles from './styles.module.css';

export default function Button({ label }) {
    return <div className={styles.button}>{label}</div>;
}
