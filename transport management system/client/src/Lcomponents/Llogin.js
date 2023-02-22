import React,{useState}  from "react"
import {useNavigate} from 'react-router-dom'
import '../App.css'
import Nav from "./Nav/Nav"

const Llogin=()=>{
   const[phone,setPhone]=useState("")
   const[password,setPassword]=useState("") 
   const navigate=useNavigate();

   const PostData=(e)=>{
       e.preventDefault();
    fetch('/Llogin',{
        method :"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({
            phone,
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
        navigate('/Lhome')
           localStorage.setItem("username",data.luser.name)
           localStorage.setItem("userPhone",data.luser.phone)
           localStorage.setItem("userTphone",data.luser.Tphone)
           localStorage.setItem("userid",data.luser._id)
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
                contact_phone
                    </span>
                <input type="number" name="phn" id="phn" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            </div>

            <div class="form-item">
                <span class="material-icons-outlined">                   
                    lock
                    </span>
                <input type="password" name="pass" id="pass" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            </div>
            
            <button type="submit" onClick={(e)=>PostData(e)}> LOGIN </button>
            
            <p>New User? <a href="/Lsignup">Create an account</a></p>
        </form>

    </div>

        </>
    )
   }
export default Llogin;