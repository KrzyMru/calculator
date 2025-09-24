import './app.css';
import { useEffect, useRef, useState } from 'react';
import CustomRadio from './components/custom-radio/custom-radio';
import calculateEquation from './utils/calculate-equation/calculate-equation';
import getLastNumber from './utils/get-last-number/get-last-number';
import { ThemeProvider } from './contexts/theme-context/theme-context';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['/', 'x', '+', '-'];

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const [text, setText] = useState<string>("");
  const [canPressNumber, setCanPressNumber] = useState<boolean>(true);
  const [canPressZero, setCanPressZero] = useState<boolean>(false);
  const [canPressDot, setCanPressDot] = useState<boolean>(false);
  const [canPressOperation, setCanPressOperation] = useState<boolean>(false);
  const [canPressMinus, setCanPressMinus] = useState<boolean>(true);
  const inputRef = useRef<null|HTMLInputElement>(null);

  useEffect(() => {
    // Scroll along with text
    if (inputRef.current)
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;

    const lastCharacter = text.slice(-1);
    const lastNumber = getLastNumber(text);

    setCanPressNumber(
      lastNumber !== '0'
    );
    setCanPressZero(
      lastNumber === '' ||
      lastNumber.includes('.') ||
      lastNumber[0] !== '0'
    );
    setCanPressDot(
      !operators.includes(lastCharacter) &&
      !lastNumber.includes('.') &&
      text.length !== 0
    );
    setCanPressOperation(
      numbers.includes(lastCharacter)
    );
    setCanPressMinus(
      numbers.includes(lastCharacter) ||
      text.length === 0 ||
      lastCharacter === 'x' ||
      lastCharacter === '/'
    );
  }, [text]);

  const handleNumberPress = (number: number) => {
    if(!canPressNumber)
      return;

    setText(text => text + number);
  }
  const handleZeroPress = () => {
    if(!canPressZero)
      return;

    setText(text => text + '0');
  }
  const handleOperatorPress = (operator: string) => {
    if(!canPressOperation)
      return;

    setText(text => text + operator);
  }
  const handleMinusPress = () => {
    if(!canPressMinus)
      return;

    setText(text => text + '-');
  }
  const handleDotPress = () => {
    if(!canPressDot)
      return;

    setText(text => text + '.');
  }
  const handleDelPress = () => {
    setText(text => text.slice(0, -1));
  }
  const handleResetPress = () => {
    setText("");
  }
  const handleCalculate = () => {
    const result = calculateEquation(text);
    setText(result.toString());
  }

  return (
    <main>
      <header>
        calc
        <CustomRadio />
      </header>
      <input 
        readOnly 
        type='text'
        value={text}
        className='screen'
        ref={inputRef}
      />
      <div className='keypad'>
        <button
          type='button'
          title='7'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(7)}
        >
          7
        </button>
        <button
          type='button'
          title='8'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(8)}
        >
          8
        </button>
        <button
          type='button'
          title='9'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(9)}
        >
          9
        </button>
        <button
          type='button'
          title='delete'
          className='key key--utility'
          onClick={handleDelPress}
        >
          DEL
        </button>
        <button
          type='button'
          title='4'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(4)}
        >
          4
        </button>
        <button
          type='button'
          title='5'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(5)}
        >
          5
        </button>
        <button
          type='button'
          title='6'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(6)}
        >
          6
        </button>
        <button
          type='button'
          title='+'
          disabled={!canPressOperation}
          className={`key ${canPressOperation ? '' : 'key--disabled'}`}
          onClick={() => handleOperatorPress('+')}
        >
          +
        </button>
        <button
          type='button'
          title='1'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(1)}
        >
          1
        </button>
        <button
          type='button'
          title='2'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(2)}
        >
          2
        </button>
        <button
          type='button'
          title='3'
          disabled={!canPressNumber}
          className={`key ${canPressNumber ? '' : 'key--disabled'}`}
          onClick={() => handleNumberPress(3)}
        >
          3
        </button>
        <button
          type='button'
          title='-'
          disabled={!canPressMinus}
          className={`key ${canPressMinus ? '' : 'key--disabled'}`}
          onClick={handleMinusPress}
        >
          -
        </button>
        <button
          type='button'
          title='.'
          disabled={!canPressDot}
          className={`key ${canPressDot ? '' : 'key--disabled'}`}
          onClick={handleDotPress}
        >
          .
        </button>
        <button
          type='button'
          title='0'
          disabled={!canPressZero}
          className={`key ${canPressZero ? '' : 'key--disabled'}`}
          onClick={handleZeroPress}
        >
          0
        </button>
        <button
          type='button'
          title='/'
          disabled={!canPressOperation}
          className={`key ${canPressOperation ? '' : 'key--disabled'}`}
          onClick={() => handleOperatorPress('/')}
        >
          /
        </button>
        <button
          type='button'
          title='x'
          disabled={!canPressOperation}
          className={`key ${canPressOperation ? '' : 'key--disabled'}`}
          onClick={() => handleOperatorPress('x')}
        >
          x
        </button>
        <button
          type='button'
          title='reset'
          className='key key--big key--utility'
          onClick={handleResetPress}
        >
          RESET
        </button>
        <button
          type='button'
          title='calculate'
          className='key key--big key--calculate'
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </main>
  )
}

export default App;
