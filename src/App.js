import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import Textform from './components/TextForm.js';


function App() {
  return (
    <>
  <Navbar title="TextUtils" aboutText="About TextUtils"/> 
  <div className="container my-3">
    <Textform heading = "Enter The Text To Analyze Below"/>
  </div>
  {/* <About/> */}
  </>
  );
}

export default App;
