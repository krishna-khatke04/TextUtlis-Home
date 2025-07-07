import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ 
      msg: message, 
      type: type 
    });
    setTimeout(() => setAlert(null), 2000);
  };

  const changetodark = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // NOTE: Avoid spamming intervals on every toggle (not recommended in real apps)
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={changetodark} />
      <Alert alert={alert} />
      <div className="container my-3">
        
          <Textforms heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      
      </div></>
  );
}

export default App;
