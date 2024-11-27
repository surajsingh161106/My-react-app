import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import Textform from './components/TextForm.js';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'Textutils - Dark Mode'; // Show on Title bar When you enable dark mode
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      // document.title = 'Textutils - Light Mode'; // Show on Title bar When you enable light mode
    }
  }
  return (
    <>
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/> 
  <div className="container my-3">
    <Textform showAlert={showAlert} heading = "Enter The Text To Analyze Below" mode={mode}/>
  </div>
  {/* <About/> */}
  </>
  );
}

export default App;
