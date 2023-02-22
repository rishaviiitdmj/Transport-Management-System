import React,{useEffect,useState} from "react";
import './data.css'
const Data2=()=>{
    
    const[data,setData]=useState([])
    
    useEffect(()=>{
        fetch('/allgoods',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt") 
              }
          }).then(res=>res.json())
          .then(result=>{
        
            setData(result.goods)
          })
        })
        
        return  (
           
            <><div style={{backgroundColor:"#F2E1DE",width:"100%"}}>
            <div style={{backgroundColor:"lightblue"}}>
            <center>
        <h2 style={{textTransform:"uppercase",textShadow:" 2px 2px #739F74"}}>{localStorage.getItem("userTname")}</h2></center>
                <h3 >Date:{localStorage.getItem("Sdate")}</h3></div>
                <br/><br/><br/><br/><br/>
            
            <center>
            <table  id="Table2">
            <thead>
            <tr style={{backgroundColor:"#C5BCA9"}}><th >PARTY NAME</th><th >By</th><th >VEHICLE</th><th>ITEM NAME & QUANTITY</th></tr>  </thead>
           <tbody>
            {
         data.map(item=>{
             if(item.vehicleBy==localStorage.getItem("userPhone"))
             if(item.date==localStorage.getItem("Sdate"))
             return(
                 <>
<tr style={{backgroundColor:"#EBF2DE"}}><td style={{textTransform:"uppercase"}}>{item.party}</td><td style={{textTransform:"uppercase"}}>{item.GoodBy}</td><td style={{textTransform:"uppercase"}}>{item.vehicle}</td>
<td>
{
       item.items.map(d=>{
           return(
               <>
               <div>{d.itemName} {'X'} {d.weight}{"kgs"}  {'X'}     {d.quantity}</div>
               </>
           )
       })
} </td>
</tr>
</>
             )
         })
            }
            </tbody>
</table><br/><br/><br/>
<a href="javascript:window.print();">Print page</a>
</center></div>
<div style={{backgroundColor:"#F2E1DE",width:"100%",height:"auto"}}></div>

            
            </>

        )
}
export default Data2