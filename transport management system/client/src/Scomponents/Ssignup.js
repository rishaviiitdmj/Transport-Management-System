import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
import Nav from '../Lcomponents/Nav/Nav'
const Ssignup=()=>{
    const [Sname,setSName]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const PostData=(e)=>{
        e.preventDefault();
        fetch('/Ssignup',{
            method:"POST",
            headers:{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify({
             Sname,
             phone,
             password
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              window.alert('Invalid data or user already exist with same Phone no.')
           }
           else{
              window.alert("Registered Successfully!! Please SignIn")
               navigate('/Slogin')
           }
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
    <>    
     
<Nav></Nav>
    <div class="background" ></div>
    <div class="container3" style={{backgroundColor:"#71AFC8"}}>
        <h2 style={{paddingTop:"20px"}}>Signup Form</h2>
        <form action="">

            <div class="form-item">
                <span class="material-icons-outlined">
                    account_circle
                    </span>
                <input type="text" name="text" id="text" placeholder="Shop Name" value={Sname} onChange={(e)=>setSName(e.target.value)}></input>
            </div>
            <div class="form-item">
                <span class="material-icons-outlined">
                contact_phone
                    </span>
                <input type="number" name="phn" id="phn" placeholder="Phone No." value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            </div>

            <div class="form-item">
                <span class="material-icons-outlined">                   
                    lock
                    </span>
                <input type="password" name="pass" id="pass" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            </div>

            <button type="submit" onClick={(e)=>PostData(e)}> SIGNUP </button>
            
            <p>Old User? <a href="/Slogin">Already have an account</a></p>
        </form>

    </div>

        </>
    )
}
export default Ssignup;