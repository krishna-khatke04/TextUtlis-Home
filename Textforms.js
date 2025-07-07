import React, {useState} from 'react'

export default function Textforms(props) {
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","Success")
    }
  const handleLoClick=()=>
  {
    let newText1=text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to LowerCase","Success")
  }
 const handleClearClick=()=>
    {
        let newText=(" ");
        setText(newText);
        props.showAlert("Cleared Text","Success")
    }
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","Success");
    }
     const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange=(event)=>
    {
        
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter the text here');
     

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>

    <div className="container" my-3 style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>YOUR TEXT SUMMARY</h3>
        <p>{text.split(" ").length} words and {text.length} charctesr</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <p>preview</p>
        <p>{text}</p>
    </div>
         </>
  )
}  