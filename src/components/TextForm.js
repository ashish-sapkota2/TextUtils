import React, {useState} from 'react'

export default function (props) {
    const handleUpClick =()=>{
        // console.log("button clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppper case", "success");
    }
    const handleClick =()=>{
        // console.log("button clicked" +text);
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
    }
    const handleLowClick =()=>{
      // console.log("button clicked" +text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower case", "success");
  };
    const handleOnChange =(event)=>{
        // console.log("changed");
        const word = event.target.value;
        setText(word);
        props.showAlert("Converted to UpperCase", "Success")
    };
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!" , "success")
    }
    const handleSpace=()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space Removed", "Success");
    }
    const [text, setText] = useState('');
    // setText("new Text");
  return (
    <>
    <div>
        <h2 style ={{color:props.mode ==='light'? 'black':'white'}}>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control"  value ={text} onChange= {handleOnChange} style ={{backgroundColor:props.mode ==='light'? 'white':'#a49b9b', color:props.mode==='light'? 'black':'white'}} id="myBox" rows="5"></textarea>
</div>
<button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to  uppercase</button>
<button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to  lowercase</button>
<button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to clipboard</button>
<button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra spaces</button>
<button disabled ={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Reverse</button>
    </div>
<div className="container my-3" style ={{color:props.mode ==='light'? 'black':'white'}}>
  <h2 >Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
  <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview here"}</p>
</div>
    </>
  )
}
