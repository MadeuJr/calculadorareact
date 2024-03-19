import { useState } from 'react';
import Button from './components/Button';
import CalculatorDisplay from './components/CalculatorDisplay';

import styles from './styles.module.css';

export default function App() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstValue, setFirstValue] = useState('0');
    const handleAddNumber = (num) => {
        setCurrentNumber((prev) => (prev === '0' ? `${num}` : `${prev}${num}`));
    };

    const handdleClear = () => {
        setCurrentNumber('0');
        setFirstValue('0');
    };

    const handleSum = () => {
        if (firstValue === '0') {
            setFirstValue(currentNumber);
            setCurrentNumber('0')
        } else {
            let sum = parseInt(firstValue) + parseInt(currentNumber);
            setCurrentNumber(() => String(sum));
        }

        console.log(firstValue);
    };

    const handleResult = () => {
        setCurrentNumber(() => firstValue);
    };

    return (
        <div className={styles.calculatorBody}>
            <CalculatorDisplay calcValue={currentNumber} />
            <div className={styles.row}>
                <Button label='7' clickAction={() => handleAddNumber('7')} />
                <Button label='8' clickAction={() => handleAddNumber('8')} />
                <Button label='9' clickAction={() => handleAddNumber('9')} />
                <Button label='x' />
            </div>
            <div className={styles.row}>
                <Button label='4' clickAction={() => handleAddNumber('4')} />
                <Button label='5' clickAction={() => handleAddNumber('5')} />
                <Button label='6' clickAction={() => handleAddNumber('6')} />
                <Button label='-' />
            </div>
            <div className={styles.row}>
                <Button label='1' clickAction={() => handleAddNumber('1')} />
                <Button label='2' clickAction={() => handleAddNumber('2')} />
                <Button label='3' clickAction={() => handleAddNumber('3')} />
                <Button label='+' clickAction={() => handleSum()} />
            </div>
            <div className={styles.row}>
                <Button label='0' clickAction={() => handleAddNumber('0')} />
                <Button label='C' clickAction={handdleClear} />
                <Button label='/' />
                <Button label='=' clickAction={handleResult} />
            </div>
        </div>
    );
}
