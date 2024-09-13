import { useState } from 'react';
import './App.css';
import'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setlowerCase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passLength, setPassLength] = useState(10);
  let [fpass,setfpass]=useState('')
  let charSet = ''
  let finalPassword = ''
  let createPassword = () =>{
    if(upperCase||lowerCase||numbers||symbols){
        if(upperCase)charSet+=UC;
        if(lowerCase)charSet+=LC;
        if(numbers)charSet+=NC;
        if(symbols)charSet+=SC;

        for (let i = 0; i < passLength; i++) {
          finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        setfpass(finalPassword)

      toast.success("Password Generated Successfully")
    }
    else{
      toast.error("Please select at least one option");
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass);
  }
  return (
    <>
      <div className="passwordBox">
        <ToastContainer/>
        <h1>Password Generator</h1>
        <div className='passwordInputBox'>
          <input type="text" readOnly value={fpass} />
          <button onClick={copyPass}>COPY</button>
        </div>
        <div className='passwordLengthBox'>
          <label>Password Length</label>
          <input type="number" max={25} min={4} value={passLength} onChange={(event)=>setPassLength(event.target.value)} />
        </div>
        <div className='includeUpperCase'>
          <label>Include Upper Case</label>
          <input type="checkbox"  checked={upperCase} onChange={() => setUpperCase(!upperCase)}  />
        </div>
        <div className='includeUpperCase'>
          <label>Include Lower Case</label>
          <input type="checkbox" checked={lowerCase} onChange={() => setlowerCase(!lowerCase)} />
        </div>
        <div className='includeUpperCase'>
          <label>Include Numbers</label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
        </div>
        <div className='includeUpperCase'>
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
