import About from './About';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03165b';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Texify- Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "Texify- Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title='Texify' about='About Us' toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3" >

          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
          </Routes>



        </div>
      </Router>

    </>
  );
}

export default App;
