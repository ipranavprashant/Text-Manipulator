import React, { useState } from "react";

export default function TextBox(props) {
  function handleUpperClick() {
    console.log("clicked");
    var newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Succesfully converted to uppercase!", "success");
  }

  function handleLowerClick() {
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Succesfully converted to lowercase!", "success");
  }
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleCopy() {
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Succesfully copied the text to the clipboard!", "success");
  }

  function handleExtraSpaces() {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Succesfully cleared all the extra spaces!", "success");
  }

  function handleTweet(){
    var tweetPost=`https://twitter.com/intent/tweet?text=${text}`;
    window.open(tweetPost);
  }

  function handleClear() {
    var newText = "";
    setText(newText);
    props.showAlert("Succesfully cleared the textbox!", "success");
  }

  const [text, setText] = useState("");
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
      </div>
      <div className="container">
        <div className="mb-3">
          <textarea
            value={text}
            className={`form-control bg-${
              props.mode === "light" ? "light" : "secondary"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            id="myText"
            rows="8"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="container d-flex justify-content-center">
          <button
            disabled={text.length === 0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "secondary"
            } btn-sm mx-1 my-1`}
            onClick={handleUpperClick}
          >
            To UpperCase
          </button>

          <button
            disabled={text.length === 0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "secondary"
            } btn-sm mx-1 my-1`}
            onClick={handleLowerClick}
          >
            To LowerCase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "secondary"
            } btn-sm mx-1 my-1`}
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "secondary"
            } btn-sm mx-1 my-1`}
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "secondary"
            } btn-sm mx-1 my-1`}
            onClick={handleTweet}
          >
            Tweet
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "secondary"
            } btn-sm mx-1 my-1`}
            onClick={handleClear}
          >
            clear
          </button>
        </div>
        <br />
        <div
          className={`container text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >

          {/* <h1><u>Analyzed Data</u></h1> */}

          
        </div>
      






        <div className={`card text-center bg-${
              props.mode === "light" ? "light" : "secondary"
            } btn-sm mx-1 my-1`}>
<div className="card-header">
  <h1 className={`text-${
  props.mode === "light" ? "dark" : "light"}`}>Text Analyzer</h1>
  </div>
</div>


      <table className={`table table-striped bg-${
              props.mode === "light" ? "light" : "secondary"
            } btn-sm mx-1 my-1`}>
  <thead>
    <tr className={`text-${
  props.mode === "light" ? "dark" : "light"}`}>
      <th scope="col">Number of Characters</th>
      <th scope="col">Number of Words</th>
      <th scope="col">Average time to read</th>    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className={`text-${
  props.mode === "light" ? "dark" : "light"}`}>{text.length}</td>
      <td className={`text-${
  props.mode === "light" ? "dark" : "light"}`}>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }</td>
      <td className={`text-${
  props.mode === "light" ? "dark" : "light"}`}> {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}</td>
    </tr>
  </tbody>
</table>




<hr/>


<div className={`card text-center bg-${
              props.mode === "light" ? "light" : "secondary"
            } btn-sm mx-1 my-1`}>
<div className="card-header">
  <h1 className={`text-${
  props.mode === "light" ? "dark" : "light"}`}>Preview</h1>
  </div>
  <div className="card-body">
    <p className={`card-text text-${
  props.mode === "light" ? "dark" : "light"}`}>{text.length > 0 ? text : "Nothing to Preview!"}</p>
  </div>
</div>
</div>
    </>
  );
}