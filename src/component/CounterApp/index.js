import {Component} from "react";
import '/.index.css';
class CounterApp extends Component{
  state={count:0}

  onDecreament=()=>{
    this.setState((prevstate=>({count:prevstate.count-1})))
  }
  onIncreament=()=>{
    this.setState((prevstate=>({count:prevstate.count+1})))
  }

  
  render(){
    const{count}=this.state
    return (
    <div className="app-container">
      <div className="content-container">
        <h1 className="heading">Counter</h1>
        <p className="counter">{count}</p>
        <div>
          <button className="decrease" type="button" onClick={this.onDecreament}>Decrease</button>
          <button className="increase" type="button" onClick={this.onIncrement}>Increase</button>
        </div>
      </div>
    </div>
  )
}
}


export default CounterApp;