import React,{useState,useEffect,useContext}  from "react"
import {Navigate, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft,  faPlus } from '@fortawesome/free-solid-svg-icons';
import {UserContext} from '../App';
import './Scsss/getveh.css'
import SNav from "./SNav/SNav";
const GetVehicles=()=>{
    const[data,setData]=useState([])
   const navigate=useNavigate();
    useEffect(()=>{
        fetch('/allvehicle',{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt") 
          }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result.vehicles)
          setData(result.vehicles)
        })
      })

      function pad2(n) {
        return (n < 10 ? '0' : '') + n;
      }
      return(
          <>
              <SNav></SNav>
              
              <div className="box" ></div>
              {
      data.map((item)=>{
          
          
            
            // console.log(item)
        var date = new Date();
        var month = pad2(date.getMonth()+1);//months (0-11)
        var day = pad2(date.getDate());//day (1-31)
        var year= date.getFullYear();
        var formattedDate =  day+"-"+month+"-"+year;
        // console.log(item.vehicleBy)
        if(item.date==formattedDate){
            console.log(item)
            if( item.from==localStorage.getItem("from") && item.to==localStorage.getItem("To"))
        {
            // console.log(item, "line no 46")
                return(
                    <>
                    <center><h1>Vehicles from {item.from} to {item.to}</h1></center>
                    <button onClick={()=>{localStorage.setItem("Tphone",item.vehicleBy?.phone); navigate("/Sgood")}} >
                    <div class="container d-flex justify-content-center mt-5" style={{marginBottom:"20px",marginRight:"20px"}}>
            <div class="card">
                <div class="top-container"> 
                    <div class="ml-3">
                    
                        <h5 class="name"style={{textTransform:"uppercase",fontSize:"30px"}}>{item.vehicleBy?.Tname}</h5>
                        <br/><br/><br/>
                        <p>Contact Info.</p>
                        <p className="mail">{item.vehicleBy?.name}</p>
                        <p class="mail">{item.vehicleBy?.phone}</p>
                    </div>
                </div>
                
            </div>
        </div></button>
                    </>
                )
        }

        }
        
        })
     }
          </>
      )
}
export default GetVehicles