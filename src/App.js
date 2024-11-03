import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm.js';

function App() {
  return (
    <>
  <Navbar title="TextUtils" aboutText="About TextUtils"/> 
  <div className="container my-3">
    <Textform heading = "Enter The Text To Analyze Below"/>
  </div>
  </>
  );
}

export default App;
