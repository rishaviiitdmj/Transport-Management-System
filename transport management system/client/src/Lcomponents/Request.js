import React,{useState,useEffect,useContext}  from "react"
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft,  faPlus } from '@fortawesome/free-solid-svg-icons';
import './LNav/LNav'
import LNav from "./LNav/LNav";
import {UserContext} from '../App';
const Requests=()=>{
    const navigate=useNavigate();
    const[data,setData]=useState([])
    const[d,setD]=useState([])
    const PostData=(GoodBy,party,items,By,postid)=>{
        var vehicle=document.getElementById("xyz").value;
     fetch('/Lhome',{
         method :"POST",
         headers:{
          "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt") 
         },
         body:JSON.stringify({
             GoodBy:GoodBy,
          vehicle:vehicle,
          vehicleBy:By,
          party:party,
          items:items
         })
     }).then(res=>res.json())
     .then(data=>{
         console.log(data)
        if(data.error){
           window.alert(data.error);
        }
        else{
         window.alert("Item Added to records")
         window.location.reload(false);
         navigate('/Lhome')
        }
     }).catch(err=>{
         console.log(err)
     })
     fetch(`/deletepost/${postid}`,{
        method:"delete",
        headers:{
            Authorization:"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        const newData = data.filter(item=>{
            return item._id !== result._id
        })
        setData(newData)
    })
    }
    const DeleteData=(postid)=>{
     
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.filter(item=>{
                return item._id !== result._id
            })
            setData(newData)
        })
    }
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
        useEffect(()=>{
            fetch('/allvehicle',{
             headers:{
                 "Authorization":"Bearer "+localStorage.getItem("jwt") 
              }
            }).then(res=>res.json())
            .then(result=>{
              setD(result.vehicles)
            })
          })
        return(
            <>
                <LNav></LNav>
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
                   if(item.date==formattedDate && item.vehicleBy==localStorage.getItem("userTphone"))
                   return(
                       <>
                       <div class="container d-flex justify-content-center mt-5" style={{marginBottom:"20px",marginRight:"20px"}}>
    <div class="card">
        <div class="top-container"> 
            <div class="ml-3">
                <h5 class="name"style={{textTransform:"uppercase",fontSize:"30px"}}>{item.party}</h5>
                
                <h3>From:  {item.GoodBy}</h3>
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
        <p>
               <label for="cars">Choose a Vehicle:</label>

<select id="xyz" style={{textTransform:"uppercase",boxSizing:"border-box",border: "2px solid black"
  }}>
{
         d.map(k=>{
            console.log(k)
           function pad2(n) {
   return (n < 10 ? '0' : '') + n;
 }
 
 var date = new Date();
 var month = pad2(date.getMonth()+1);//months (0-11)
 var day = pad2(date.getDate());//day (1-31)
 var year= date.getFullYear();
 var formattedDate =  day+"-"+month+"-"+year;
           if(k.date==formattedDate && item.vehicleBy==localStorage.getItem("userTphone")) 
        //  if(k.vehicleBy==localStorage.getItem("userTphone"))
             return(
                 <>
  <option value={k.vehicleNo}>{k.vehicleNo}</option>
  </>        
  )
         }) 
     }     
</select>
               </p>
               <br/>
               <button onClick={()=>PostData(item.GoodBy,item.party,item.items,item.vehicleBy,item._id)}>Loaded</button> <button onClick={()=>DeleteData(item._id)}>Cancel</button> 
    </div>
</div>
                       </>
                   )
                })
               }
                
            </>
        )
}
export default Requests