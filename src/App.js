// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
//  import About from './components/About';
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Textutils"
        mode={mode}
        toggleMode={toggleMode}
        // about="About"
      />
    <Alert alert={alert} />  
      <div className="container my-3">
          {/* <Route path="/about" element={ <About />}>
           </Route> */}
            <Textforms
          showAlert={showAlert}
          heading="Enter The text to analyse "
          mode={mode}
        /> 
        {/* </Route> 
          </Routes>
       </switch> */}

        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
