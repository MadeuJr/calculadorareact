import { useState } from 'react';
import styles from './styles.module.css';

export default function CalculatorDisplay() {
    const [calcValue, setcalcValue] = useState('0');
    return <div className={styles.display}>{calcValue}</div>;
}
