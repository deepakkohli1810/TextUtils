import React , { useState } from 'react';


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked:" + text)
       let  newText = text.toUpperCase();
        setText(newText)
         
    }
    const handleLoClick = () =>{
      // console.log("Uppercase was clicked:" + text)
     let  newText = text.toLowerCase();
      setText(newText)
       
  } 
    const handleOnChange = (event) =>{
        // console.log("Handle on change")
        setText(event.target.value)

    }

    const handleCopy = () =>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
const [text, setText] = useState("");

// text = "New text value"  Wrong way to change the state.

// Following is the right way of changing the state.

  return (
  <>
 <div className="container">
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary"  onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Space</button>



 </div>
 <div className="container my-4">
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} Characters</p>
  <p>{0.008 * text.split(" ").length } Minutes to read</p>
  <h2 className="container">Preview</h2>
  <p>{text}</p>
 </div>
 </>
  )
  }
