import React,{useState,useEffect,useContext}  from "react"
import {useNavigate} from 'react-router-dom'
import SNav from "./SNav/SNav";
import {UserContext} from '../App';
import './Scsss/Spending.css'
const Spending=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('/allpending',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt") 
              }
          }).then(res=>res.json())
          .then(result=>{
            setData(result.pendings)
          })
        })
        return(
            <>
            <SNav></SNav>
               {
                data.map(item=>{
                function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
  
  var date = new Date();
  var month = pad2(date.getMonth()+1);//months (0-11)
  var day = pad2(date.getDate());//day (1-31)
  var year= date.getFullYear();
  
  var formattedDate =  day+"-"+month+"-"+year;
                   if(item.date==formattedDate&& item.GoodBy==localStorage.getItem("username"))
                   return(
                       <>
                       <div class="container d-flex justify-content-center mt-5" style={{marginBottom:"20px",marginRight:"20px"}}>
    <div class="card">
        <div class="top-container"> 
            <div class="ml-3">
                <h5 class="name"style={{textTransform:"uppercase",fontSize:"30px"}}>{item.party}</h5>
                <br/>
                <p style={{color:"red"}}>Items</p>
                {
                item.items.map(d=>{
           return(
               <>
               <p>{d.itemName} {'X'} {d.weight}{"kgs"}  {'X'}     {d.quantity}</p>
               </>
           )
                })
                }
            </div>
        </div>
        
    </div>
</div>
                       </>
                   )
                })
               } 
            </>
        )
}
export default Spending