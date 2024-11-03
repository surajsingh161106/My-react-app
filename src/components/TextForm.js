import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked: " + text); // Only for Check Bugs nothing Alse
    let newText = text.toUpperCase(); 
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
    <div>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
