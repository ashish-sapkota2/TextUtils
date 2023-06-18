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
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-white');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');

  }
  let toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' +cls);
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      setText("Enable Light Mode");
      showAlert(cls+ " mode has been enabled ", "success");
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
      <Navbar title="TextUtils" about="About Us" mode = {mode} toggleMode={toggleMode} text ={text}/>
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

