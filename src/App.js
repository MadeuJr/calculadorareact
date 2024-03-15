import Button from './components/Button';
import CalculatorDisplay from './components/CalculatorDisplay';

import styles from './styles.module.css';

export default function App() {
    return (
        <div className={styles.calculatorBody}>
            <CalculatorDisplay />
            <div className={styles.row}>
                <Button label='7' />
                <Button label='8' />
                <Button label='9' />
                <Button label='x' />
            </div>
            <div className={styles.row}>
                <Button label='4' />
                <Button label='5' />
                <Button label='6' />
                <Button label='-' />
            </div>
            <div className={styles.row}>
                <Button label='1' />
                <Button label='2' />
                <Button label='3' />
                <Button label='+' />
            </div>
            <div className={styles.row}>
                <Button label='0' />
                <Button label=',' />
                <Button label='/' />
                <Button label='=' />
            </div>
        </div>
    );
}
