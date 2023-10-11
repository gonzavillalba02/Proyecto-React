import { useState } from 'react';
import './reset.css';
import './App.css';
import Sign from './Components/Sign/Sign';

function App() {

  const [step, setStep] = useState(1);

  const handleStep = (num) => {
    setStep(num);
  }

  return (
    <div className='dom'>
      {step === 1 && <Sign handleStep={handleStep}/>}
    </div>
  );
}

export default App;
