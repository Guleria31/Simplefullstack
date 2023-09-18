
import './App.css';
import $ from 'jquery';
import { Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import { Help } from './Help';
import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



function App() {

  useEffect(() => {
    const homeLink = document.querySelector('a[name="home"]');
    if (homeLink) {
      homeLink.click();
    }
  }, []);

  return (
    
    
    <BrowserRouter>
    
      <div class="loader">
      <span style={{ '--i': 1 }}></span>
  <span style={{ '--i': 2 }}></span>
  <span style={{ '--i': 3 }}></span>
  <span style={{ '--i': 4 }}></span>
      </div>
      <div className="App container-fluid px-0">
      
        
        <nav className="navbar navbar-expand-sm btn btn-light  navbar-left">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
        </svg>
         
          <ul className="navbar-nav ms-5 ps-5">
          
            <li className="nav-item m-1">
              <Link className="navbar navbar-expand-sm btn btn-primary  navbar-right button_s" name="home" to="/home">
                Home
              </Link>
            </li>
            
            <li className="nav-item m-1">
              <Link className="navbar navbar-expand-sm btn btn-light btn-outline-primary navbar-right button_s" to="/department">
                Department
              </Link>
            </li>
            
            <li className="nav-item m-1">
              <Link className="navbar navbar-expand-sm btn btn-light btn-outline-primary navbar-right button_s" to="/employee">
                Employee
              </Link>
            </li>
           
            <li className="nav-item m-1">
              <Link className="navbar navbar-expand-sm btn btn-light btn-outline-primary navbar-right button_s" to="/help">
                About
              </Link>
            </li>
            
            
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/help" element={<Help />} />

        </Routes>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
