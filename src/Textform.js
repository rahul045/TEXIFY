import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const upcase = () => {
        // console.log("UpperCase button clicked");
        let newtxt = text.toUpperCase();
        setText(newtxt);
        props.showAlert("Text has been converted to Upper Case", "success")
    }
    const lowcase = () => {
        // console.log("UpperCase button clicked");
        let newtxt = text.toLowerCase();
        setText(newtxt);
        props.showAlert("Text has been converted to Lower Case", "success")
    }
    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var txt = document.getElementById("mybox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Text has been copied to clipboard", "success")

    }
    const handleExtraSpaces = () => {
        var txt = text.split(/[ ]+/);
        setText(txt.join(" "));
        props.showAlert("Extra Spaces has been removed from text", "success")
    }
    const word = () => {
        let txt = text.split(" ");
        if (text.length === 0)
            return "0";
        else if (txt.length > 0 && txt[txt.length - 1] === "") {
            return txt.length - 1;
        }
        else
            return txt.length;
    }
    return (
        <div>

            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
            <div className="mb-3 container">

                <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={upcase}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={lowcase}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <div className="container">
                <h1 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}> Your Text Summary</h1>

                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{word()} words and {text.length} characters</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length > 0 ? text : 'Enter your text to preview'}</p>
            </div>
        </div >
    )
}
