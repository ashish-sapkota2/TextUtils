import React ,{useState} from 'react';
// import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light"); // whether dark mode is enabled or not
  const [text, setText] = useState("Enable dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert ({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  let handleGreen=()=>{
    if(mode==='light'){
      setmode("green");
      document.body.style.backgroundColor= 'green';
    }else{
      setmode('light');
      document.body.style.background= 'white';
      document.body.style.backgroundColor= 'white';
    }
  }
  let toggleMode =()=>{
    if(mode==='light'|| mode ==='green'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      setText("Enable Light Mode");
      showAlert("Dark mode has been enabled ", "success");
      document.title ='TExtUtil-Dark Mode';

    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      setText("Enable Dark Mode");
      showAlert("Light mode has been enabled ", "success");
      document.title ='TExtUtil-Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode = {mode} toggleMode={toggleMode}  handleGreen ={handleGreen} text ={text}/>
      {/* <Navbar title="TextUtils" about="About Us" mode = {mode} handleGreen ={handleGreen} text ={text}/> */}
      <Alert alert = {alert}/>
     <div className="container my-3">   
        <Routes>
          <Route exact path="/about" element={<About  mode ={mode} />}>
            {/* <About /> */}
          </Route>
          <Route exact path="/" element={<TextForm showAlert ={showAlert} heading ="Enter the text here" mode ={mode}/>}>
            
          </Route>
        </Routes>   
      </div>
    </Router>

     {/* <About/> */}

    </>
  );
}
export default App;

