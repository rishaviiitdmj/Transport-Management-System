import React,{useState,useEffect,useContext}  from "react"
import {useNavigate} from 'react-router-dom'
import SNav from "./SNav/SNav";
import {UserContext} from '../App';
const Shome=()=>{
  const[from,setFrom]=useState('')
  const[to,setTo]=useState('')
  const navigate=useNavigate()
  const FindData=(e)=>{
    e.preventDefault();
   localStorage.setItem("from",from)
   localStorage.setItem("To",to)
   navigate('/Getvehicles');
  }
  return(
    <>
      <SNav></SNav>
      
      <div class="background"></div>
    <div class="container3" style={{backgroundColor:"#71AFC8"}}>
        <form action="">
<center><h2>Search Vehicle</h2></center>
            <div class="form-item">
                <span class="material-icons-outlined">
                    account_circle
                    </span>
                <input type="text" name="text" id="text" placeholder="From" value={from} onChange={(e)=>setFrom(e.target.value)} required></input>
            </div>

            <div class="form-item">
                <span class="material-icons-outlined">                   
                    lock
                    </span>
                <input type="text" name="text"  placeholder="To" value={to} onChange={(e)=>setTo(e.target.value)} required></input>

            </div>

            <button type="submit" onClick={(e)=>FindData(e)}> FIND </button>
            
        </form>

    </div>
      
    </>
  )
  }
export default Shome