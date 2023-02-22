export const initialState = null;


export const reducer = (state , action)=>{
if(action.type==='USER'){
  return action.payload;
}
return state;
}
export default reducer