import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform';


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
