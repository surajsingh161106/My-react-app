import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked: " + text); // Only for Check Bugs nothing Alse
    let newText = text.toUpperCase(); 
    setText(newText)
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was Clicked: " + text); // Only for Check Bugs nothing Alse
    let newText = text.toLowerCase(); 
    setText(newText)
  }

  const handleClearClick = ()=>{
    // console.log("Lowercase was Clicked: " + text); // Only for Check Bugs nothing Alse
    let newText = ''; 
    setText(newText)
  }

  const handleOnChange = (event)=>{
    // console.log("On Change"); // Only for Check Bugs nothing Alse
    setText(event.target.value);  
  }
  
  const [text, setText] = useState('Enter Text Here');
  // text = "New Text"; // Wrong way to change the state
  // setText("new Txt"); // Correct way to change the state

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Word and {text.length} Character</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

