import styles from './styles.module.css';

export default function CalculatorDisplay({ calcValue }) {
    return <div className={styles.displayContainer}>
            <input className={styles.display} value={calcValue}/>
        </div>
        
}
