import { useState } from 'react';
import './reset.css';
import './App.css';
import Sign from './Components/Sign/Sign';
import Principal from './Components/Principal/principal';

function App() {

  const [step, setStep] = useState(1);

  const handleStep = (num) => {
    setStep(num);
  }

  return (
    <div className='dom'>
      {step === 1 && <Sign handleStep={handleStep}/>}
      {step === 0 && <Principal handleStep={handleStep}/>}
    </div>
  );
}

export default App;
