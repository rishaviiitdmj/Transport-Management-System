import React,{useEffect,useState} from "react";
import './data.css'
const Data=()=>{

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
        
        return(
            <>
            <div style={{backgroundColor:"#F2E1DE",width:"100%"}}>
            <div >
            <div style={{backgroundColor:"lightblue"}}>
            <center>
        <h2 style={{textTransform:"uppercase",textShadow:" 2px 2px #739F74"}}>{localStorage.getItem("userTname")}</h2></center>
                <h3 style={{textTransform:"uppercase"}} >PARTY NAME: {localStorage.getItem("Sparty")}</h3></div>
                <br/><br/><br/><br/><br/>
            
            <center>
            <table>
            <thead>
  <tr style={{backgroundColor:"#C5BCA9"}}>
    <th>DATE</th>
    <th>VEHICLE</th>
    <th>By</th>
    <th>ITEM & QUANTITY</th>
    <th>Cost</th>
    
  </tr></thead>
  <tbody>
            {
         data.map(item=>{
              if(item.vehicleBy==localStorage.getItem("userPhone"))
             if(item.party==localStorage.getItem("Sparty"))
             if(item.date>=localStorage.getItem("Sd1") && item.date<=localStorage.getItem("Sd2"))
             return(
                 <>
            
  <tr style={{backgroundColor:"#EBF2DE"}}>
    <td>{item.date}</td>
    <td>{item.vehicle}</td>
    <td>{item.GoodBy}</td>
    <td>
    {
        item.items.map(d=>{
            return(
                <>
                    
                    <div>{d.itemName} {'X'} {d.weight}{"kgs"}  {'X'}  {d.quantity} </div>
                    
                </>
            )
        })
    }
    </td>
    <td></td>
  </tr>
                 </>
             )
         })
            }
            </tbody>
            </table>
            <br/><br/>
            <a href="javascript:window.print();">Print page</a>
            </center>
            </div>
            </div>
            </>
        )
}
export default Data