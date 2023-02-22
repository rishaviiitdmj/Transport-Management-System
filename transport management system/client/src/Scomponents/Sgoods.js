import React,{useState,useEffect,useContext}  from "react"
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft,  faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Lcomponents/Load/load.css'
import SNav from './SNav/SNav'
import {UserContext} from '../App';
const Sgood=()=>{
  const{state, dispatch}= useContext(UserContext);
  const[party,setParty]=useState("")
  const[items, setItems] = useState([]); 
  const[data,setData]=useState([])
  const[weight,setweight]=useState('')
const [inputValue, setInputValue] = useState('');
const [totalItemCount, setTotalItemCount] = useState(0);
  const navigate=useNavigate();
  const PostData=(e)=>{
    e.preventDefault();
    const GoodBy=localStorage.getItem("username")
    const vehicleBy=localStorage.getItem("Tphone")
 fetch('/Sgood',{
     method :"POST",
     headers:{
      "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt") 
     },
     body:JSON.stringify({
         GoodBy,
      vehicleBy,
      party,
      items
     })
 }).then(res=>res.json())
 .then(data=>{
     console.log(data)
    if(data.error){
       window.alert(data.error);
    }
    else{
     window.alert("Item sent to loader for confirmation")
     window.location.reload(false);
     navigate('/Shome')
    }
 }).catch(err=>{
     console.log(err)
 })
 }
   const handleAddButtonClick=()=>{
       const newItem={
           itemName:inputValue,
           quantity:0,
         weight:30,
       }
   if(inputValue==""){
     window.alert("Enter Item Name")
     return
   }
       const newItems=[...items,newItem];
       setItems(newItems);
       setInputValue('');
       calculateTotal();
   }
   const handleQuantityIncrease = (index) => {
   const newItems = [...items];

   newItems[index].quantity++;
       
   setItems(newItems);
   calculateTotal();
 };
 const handleWeightIncrease = (index) => {
  const newItems = [...items];

  newItems[index].weight++;
      
  setItems(newItems);
  calculateTotal();
};
 const handleQuantityDecrease = (index) => {
   const newItems = [...items];
if(newItems[index].quantity==0)
return
   newItems[index].quantity--;

   setItems(newItems);
   calculateTotal();
 };
 const handleWeightDecrease = (index) => {
  const newItems = [...items];
if(newItems[index].weight==0)
return
  newItems[index].weight--;

  setItems(newItems);
  calculateTotal();
};

 const toggleComplete = (index) => {
   const newItems = [...items];

   newItems[index].isSelected = !newItems[index].isSelected;

   setItems(newItems);
 };

 const calculateTotal = () => {
   const totalItemCount = items.reduce((total, item) => {
     return total + item.quantity;
   }, 0);

   setTotalItemCount(totalItemCount);
 };

   return(
       <>
       <SNav></SNav>
       <div class="back"></div>
   <center>   
     <div className='main-container'>
     <center><h3>LOADING FORM</h3></center>
     
     
     <div className='add-item-box'>
       <input type="text" placeholder="Buyer Name" style={{textTransform:"uppercase"}} value={party} onChange={(e)=>setParty(e.target.value)}/>
     </div>
       <div className='add-item-box'>
       
         <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='add-item-input' placeholder='Add an item...' required/>
         <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
       </div>
       <div className='item-list'>
         {items.map((item, index) => (
           <div className='item-container'>
             <div className='item-name' onClick={() => toggleComplete(index)} >
               
                 
                   
                   <span style={{color:"black",background:"none",fontSize:"20px"}} >{item.itemName}</span>
               
             
             </div>
             <div >
             Quantity:
             <div className='quantity'>
             
               <button>
                 <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
               </button>
               {/* <span style={{color:"black",background:"none"}}> {item.quantity} </span> */}
               <input type="text" value={item.quantity} style={{color:"black",background:"none"}}></input>
               <button>
                 <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
               </button>
            
             </div>
             Weight(kgs):
             <div className='weight'>
             <button>
                 <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleWeightDecrease(index)} />
               </button>
             <input type="text" value={item.weight} style={{color:"black",background:"none"}}  placeholder="weight"></input>
             <button>
                 <FontAwesomeIcon icon={faChevronRight} onClick={() => handleWeightIncrease(index)} />
               </button>
             </div>
             </div>
           </div>
         ))}
       </div>
       <div className='total'>Total: {totalItemCount}</div>
       <button type="submit" style={{color:"red"}} onClick={(e)=>PostData(e)}> Submit</button>
     </div>
     </center> 
   
       </>
   )
}

export default Sgood
    