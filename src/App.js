import { useState } from 'react';
import './App.css';

export const areEqual = (a, b) => {
  if (a === null || b === null) {
    throw new Error('args cant be null');
  }
  return a === b;
};
export const areAnagram = (a, b) => a.split('').sort().join('') === b.split('').sort().join('');

function App() {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [equal, setIsEqual] = useState(false);
  const [anagram, setIsAnagram] = useState(false);

  const updateEqual = () => {
    setIsEqual(areEqual(valueA, valueB));
  };

  const updateAnagram = () => {
    setIsAnagram(areAnagram(valueA, valueB));
  };

  return (
    <div className="App">
        <h1>Comparações de String</h1>
        <input data-testid="input-a" value={valueA} onChange={(e) => setValueA(e.target.value)} className="AppInput" type="text" placeholder="String 1" />
        <input data-testid="input-b" value={valueB} onChange={(e) => setValueB(e.target.value)} className="AppInput" type="text" placeholder="String 2" />
        <p data-testid="output-result-equal">
          {equal ? <span className="AppResultSuccess">Igual</span> : <span className="AppResultFailure">Diferente</span>}
        </p>
        <button data-testid="input-submit-equal" onClick={updateEqual} className="App-link">Validar</button>
        <p data-testid="output-result-anagram">
          {anagram ? <span className="AppResultSuccess">Anagrama</span> : <span className="AppResultFailure">Não Anagrama</span>}
        </p>
        <button data-testid="input-submit-anagram" onClick={updateAnagram} className="App-link">Validar</button>
    </div>
  );
}

export default App;
