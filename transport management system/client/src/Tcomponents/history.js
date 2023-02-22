import React,{useEffect,useState} from "react";
import ReactTable from "react-table";  
import TNav from './TNav/TNav'
import './TNav/history.css'
import { useNavigate } from "react-router-dom";
const History=()=>{
const[party,setParty]=useState("");
const[date,setDate]=useState('')
const navigate=useNavigate();
const PostData1=(e)=>{
    var d1=document.getElementById("x").value;
    var d2=document.getElementById("y").value;
    localStorage.setItem("Sparty",party);
    localStorage.setItem("Sd1",d1);
    localStorage.setItem("Sd2",d2);
    navigate('/data');
}
const PostData2=(e)=>{
    var date=document.getElementById("z").value;
    localStorage.setItem("Sdate",date);
    navigate('/data2')
}
return(
    <>
    <TNav></TNav>
    {/* <br/><br/><br/> <br/><br/><br/> */}
	<div className='app-background'>
<div class="login-wrap" >
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">By Party</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">By Date</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Party Name</label>
					<input id="user" type="text" class="input" value={party} onChange={(e)=>setParty(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Date From:</label>
					<input id="x" type="text" class="input" placeholder="eg:24-12-2021"  />
				</div>
                <div class="group">
					<label for="pass" class="label">Date Upto:</label>
					<input id="y" type="text" class="input" placeholder="eg:24-12-2021" />
				</div>
				<div class="group">
					<input type="submit" class="button" value="Get Data" style={{height:"40px"}} onClick={(e)=>PostData1(e)}/>
				</div>
				<div class="hr"></div>
			</div>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Date</label>
					<input id="z" type="text" class="input" placeholder="eg:24-12-2021"  />
				</div>
				
				<div class="group">
					<input type="submit" class="button" value="Get Data" style={{height:"40px"}} onClick={(e)=>PostData2(e)}/>
				</div>
				<div class="hr"></div>
				
			</div>
		</div>
	</div>
</div></div>

</>
)
}
export default History