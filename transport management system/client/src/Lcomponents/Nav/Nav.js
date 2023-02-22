import React from 'react';
import './Nav.css';

const Nav=()=>{
  const RenderMenu =()=>{
return[
  <>
<nav class="navbar"  >
    
     <div class="logo">MUO</div>
  
     <ul class="nav-links">
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       <div class="menu">
         <li><a href="/">HOME</a></li>
         <li class="services" >
           <a href="#">Seller</a>
       
           <ul class="dropdown">
             <li><a href="/Slogin">Login</a></li>
             <li><a href="/Ssignup">Signup</a></li>
           </ul>
         </li>
         <li class="services">
           <a href="#">Loader</a>
       
           <ul class="dropdown">
             <li><a href="/Llogin">Login</a></li>
             <li><a href="/Lsignup">Signup</a></li>
           </ul>
         </li>
         <li class="services">
           <a href='#'>Transporter</a>
       
           <ul class="dropdown">
             <li><a href="/Tlogin">Login</a></li>
             <li><a href="/Tsignup">Signup</a></li>
           </ul></li>
           
       </div>
     </ul>
   </nav>
   </>
]
  }
  return(
    <>
      <RenderMenu/>
    </>
  )
}
export default Nav;