import Button from "./components/Button";
import CalculatorDisplay from "./components/CalculatorDisplay";
import CalculatorRow from "./components/CalculatorRow";
import styles from "./styles.module.css";

export default function App() {
    return (
        <div className= {styles.div}>
            <CalculatorDisplay/>
            <CalculatorRow>
              <Button label='1'/>
              <Button label='2'/>
              <Button label='3'/>
            </CalculatorRow>
        </div>
    );
}

