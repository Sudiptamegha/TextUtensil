import React, { useState } from "react";

export default function Textforms(props) {
  const handleUPclick = () => {
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upperCase","success");
  };
  const handleLoclick = () => {
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };

  const [Text, setText] = useState("Enter text Here", );
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example</label> */}
          <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
            id="myBox" rows="8"></textarea>
        </div>
        <button className="btn-btn-primary mx-2" onClick={handleUPclick}>
          Convert to Uppercase
        </button>
        <button className="btn-btn-primary" onClick={handleLoclick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary </h1>
        <p>
          {Text.split(" ").length} Words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length}Minutes Read</p>
        <h2> Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
