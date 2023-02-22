import React from 'react';
// import './App.css';
import {Route, BrowserRouter,Routes} from "react-router-dom";
import Lsignup from './Lcomponents/Lsignup';
import Llogin from './Lcomponents/Llogin';
import Tsignup from './Tcomponents/Tsignup';
import Tlogin from './Tcomponents/Tlogin';
import NewHome from './Lcomponents/Newhome';
import Thome from './Tcomponents/Thome';
import Lhome from './Lcomponents/Lhome';
 import History from './Tcomponents/history';
 import Data from './Tcomponents/TNav/data';
 import Data2 from './Tcomponents/TNav/data2';
 import Ssignup from './Scomponents/Ssignup';
 import Slogin from './Scomponents/Slogin';
 import Shome from './Scomponents/Shome';
 import GetVehicles from './Scomponents/GetVehicles';
import Spending from './Scomponents/Spending';
 import { createContext, useEffect,useContext,useReducer } from 'react';
import {initialState, reducer} from './reducer/useReducer';
import Sgood from './Scomponents/Sgoods';
import Requests from './Lcomponents/Request';
import Saccepted from './Scomponents/Saccepted';
export const UserContext = createContext();

 const App=()=>{
  const [state, dispatch]= useReducer(reducer, initialState)
  return(
    
    <>
<UserContext.Provider value={{state , dispatch}}>
    <BrowserRouter>
    
   <Routes>
   <Route path="/Saccepted" element={<Saccepted/>}/>
   <Route path="/Spending" element={<Spending/>}/>
   <Route path='/Sgood' element={<Sgood/>}/>
   <Route path="/Getvehicles" element={<GetVehicles/>}/>
    <Route  path="/Lsignup" element={<Lsignup/>}/>
    <Route path="/" element={<NewHome/>}/>
  <Route  path="/Llogin" element={<Llogin/>}/>
  <Route  path="/Tsignup" element={<Tsignup/>}/>
   <Route path="/Thome" element={<Thome/>}/>
  <Route  path="/Tlogin" element={<Tlogin/>}/>
  <Route path="/Lhome" element={<Lhome/>}/>
  <Route path="/history" element={<History/>}/>
  <Route path="/data" element={<Data/>}/>
  <Route path="/data2" element={<Data2/>}/>
  <Route path='/Slogin' element={<Slogin/>}/>
  <Route path="/Ssignup" element={<Ssignup/>}/>
  <Route path="/Shome" element={<Shome/>}/>
  <Route path="/Requests" element={<Requests/>}/>
</Routes>
  </BrowserRouter>
</UserContext.Provider>
  </>
  )
}
export default App;
