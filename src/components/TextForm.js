import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked: " + text); // Only for Check Bugs nothing Alse
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was Clicked: " + text); // Only for Check Bugs nothing Alse
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
  }

  const handleClearClick = ()=>{
    // console.log("Lowercase was Clicked: " + text); // Only for Check Bugs nothing Alse
    let newText = ''; 
    setText(newText)
    props.showAlert("Text Cleared!","success");
  }

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value); 
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("ExtraSpace Remove!","success");
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
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 mb-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Word and {text.length} Character</p>
      {/* <p>{0.008 * text.split(" ").length} Minutes Read</p> */}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}

