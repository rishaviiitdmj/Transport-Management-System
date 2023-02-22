import React from "react";
import { useNavigate } from "react-router-dom";
import './LNav.css';
const LNav=()=>{
  const navigate=useNavigate()
  const handle=(e)=>{
    localStorage.clear()
    navigate('/');
    window.addEventListener('popstate', (event) => {
      if (event.state) {
        window.alert("Login first")
        navigate('/')
      }
     }, false);  
}
return(
    <>
      <nav class="navbar"  >
            
            <div class="logo">MUO</div>
            
            <ul class="nav-links">
              <input type="checkbox" id="checkbox_toggle" />
              <label for="checkbox_toggle" class="hamburger">&#9776;</label>
              <div class="menu">
                <li><a href="/Lhome">HOME</a><i class="fa fa-home"/></li>
                <li><a href="/Requests">Requests</a><i class="fa fa-handshake-o"/></li>
                  <li><a onClick={(e)=>handle(e)}>Logout</a></li>
              </div>
            </ul>
          </nav>
    </>
  )
}
export default LNav;