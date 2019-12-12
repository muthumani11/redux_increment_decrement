import * as redux from 'redux';

//action
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
 const intialstate ={
count:10
 }

const reducer = (state = intialstate,action) =>{
switch(action.type){
  case COUNTER_INCREMENT:{
    return {...state, count: state.count +1};
    break;
  }
  case COUNTER_DECREMENT:{
    return {...state, count: state.count -1};
    break;
  }
default:{

  return state;
}
}
}
const store = redux.createStore(reducer);
export default store;
