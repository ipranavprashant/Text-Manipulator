import React, { useState } from "react";
// import background from "./background.jpg";
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import Alert from "./Alert";

export default function App() {
  const [mode, setMode] = useState("light");
  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled succesfully!", "success");
      //   document.body.style.backgroundImage = { background };
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled successfully!", "success");
      //   document.body.style.backgroundImage = { background };
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar title="Text Manipulator" mode={mode} handleToggle={handleToggle} />
      <Alert alert={alert} />
      <br />
      <br />
      <TextBox
        heading="Enter the text in the text box below:"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}
