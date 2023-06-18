import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}>
    <div className="container-fluid">
      <Link className="navbar-brand text-white" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">{props.about}</Link>
          </li>
        </ul> 
        <div className="bg-white rounded mx-2" style={{height:'20px', width: '20px', border: '1px solid black'}} onClick={()=>{props.toggleMode('white')}}></div>
        <div className="bg-dark rounded mx-2" style={{height:'20px', width: '20px', border: '1px solid white'}} onClick={()=>{props.toggleMode('dark')}}></div>
        <div className="bg-success rounded mx-2" style={{height:'20px', width: '20px'}} onClick={()=>{props.toggleMode('sucess')}}></div>
        <div className="bg-danger rounded mx-2" style={{height:'20px', width: '20px'}} onClick={()=>{props.toggleMode('danger')}}></div>
        <div className="bg-warning rounded mx-2" style={{height:'20px', width: '20px'}} onClick={()=>{props.toggleMode('warning')}}></div>
        <div className="bg-primary rounded mx-2" style={{height:'20px', width: '20px'}} onClick={()=>{props.toggleMode('primary')}}></div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes ={title: PropTypes.string.isRequired,
                    about :PropTypes.string
}

Navbar.defaultProps ={
    title: "set title here",
    about : "about us here"

};