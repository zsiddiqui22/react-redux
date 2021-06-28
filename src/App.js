import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from './actions/index';



function App() {
  const appState = useSelector((state)=> state.changeNumber);
  const dispatch  = useDispatch();

  return (
    <div className="App">

      <h1>Counter</h1>

      <div className="counter">
        <button className="btn" onClick={()=>dispatch(decrement())}>-</button>
        <input name="count" type="text" value={appState} placeholder={`00.00`} />
        <button className="btn" onClick={()=>dispatch(increment())}>+</button>
      </div>

    </div>
  );
}

export default App;
