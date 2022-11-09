import React,{useState} from 'react'

export default function (prop) {

 const handleUpclicked=()=>{
   let myText=text.toUpperCase();
   setText(myText)
 }

 const handleClearClicked=()=>{
  let myText='';
  setText(myText)
 }
 const handleLcclicked=()=>{
    let myText=text.toLowerCase();
    setText(myText)
 }
 const handleOnChange=(event)=>{
    setText(event.target.value)
  }

    const [text, setText] = useState();

  return (
    <>
    <div className='container'>
        <h1>{prop.header}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>

            <div>
            <button className="btn btn-primary mx-2 " onClick={handleUpclicked}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLcclicked}>Convert to lovercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClicked}>Clear tax</button>
            </div>
    </div>

    <div className="container">
      <h1 className='mt-5'>Text Summary</h1>
      <p>{text?.split(" ").length} words and {text?.length} charactors</p>
      <p>{0.008 * text?.split(" ").length} text read in minutes</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
