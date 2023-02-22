import React,{useState}  from "react"
import {useNavigate} from 'react-router-dom'

import '../App.css'
import Nav from "../Lcomponents/Nav/Nav"
const Slogin=()=>{
   const[Sname,setSname]=useState("")
   const[password,setPassword]=useState("") 
   const navigate=useNavigate();

   const PostData=(e)=>{
       e.preventDefault();
    fetch('/Slogin',{
        method :"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({
            Sname,
            password
        })
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
       if(data.error){
          window.alert(data.error);
       }
       else{
        window.alert("SignedIn successfully")
        navigate('/Shome')
           localStorage.setItem("username",data.suser.Sname)
           localStorage.setItem("userPhone",data.suser.phone)
        //    localStorage.setItem("userid",data.luser._id)
           localStorage.setItem("jwt",data.token)
       }
    }).catch(err=>{
        console.log(err)
    })
    }

    return(
        <>
        <Nav></Nav>
            <div class="background"></div>
    <div class="container3" style={{backgroundColor:"#71AFC8"}}>
        <h2 style={{paddingTop:"20px"}}>Login Form</h2>
        <form action="">

            <div class="form-item">
                <span class="material-icons-outlined">
                    account_circle
                    </span>
                <input type="text" name="text" id="text" placeholder="Shop Name" value={Sname} onChange={(e)=>setSname(e.target.value)}></input>
            </div>

            <div class="form-item">
                <span class="material-icons-outlined">                   
                    lock
                    </span>
                <input type="password" name="pass" id="pass" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            </div>

            <button type="submit" onClick={(e)=>PostData(e)}> LOGIN </button>
            
            <p>New User? <a href="/Ssignup">Create an account</a></p>
        </form>

    </div>

        </>
    )
   }
export default Slogin;