import React from 'react';
import logo from './logo.svg';
import './App.css';
import store,{COUNTER_INCREMENT,COUNTER_DECREMENT} from './store.js';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = { name :  'React' };
 }

increment = () => {
  store.dispatch({type: COUNTER_INCREMENT});
  console.log(store.getState().count);
}
decrement = () => {
  store.dispatch({type: COUNTER_DECREMENT});
  console.log(store.getState().count);
}
 render() {
   return (

<div>

<h1> Megam Sysytems </h1>
<button onClick={this.increment}>Increment</button>
<button onClick={this.decrement}>Decrement</button>


</div>

   );
 }
}


export default App;
