import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import Textform from './components/TextForm.js';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not.
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> 
  <div className="container my-3">
    <Textform heading = "Enter The Text To Analyze Below" mode={mode}/>
  </div>
  {/* <About/> */}
  </>
  );
}

export default App;
