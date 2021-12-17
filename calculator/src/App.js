import React, { Component } from 'react';
import './index.css';
import Screen from './components/Screen';
import Keypad from './components/Keypad';
class App extends Component {  
      constructor() {
        super();
  
          this.state = {
                result:""
    }
  }
 onClick = button => {

    if(button === "="){
        this.calculate()
    }
  
    else if(button === "res"){
        this.reset()
    }
    else if(button === "del"){
        this.backspace()
    }
  
    else {
        this.setState({
            result: this.state.result + button
        })
    }
  };
  
  
 calculate = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })
    }
};

 reset = () => {
      this.setState({
          result: ""
      })
  };

 backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };


  render() {
  return (
    <div className="App">
      <div className="content">
      <header className="wrapper">
        <h1>calc</h1>
        <div className="toggle-wrapper">
          <h3>THEME</h3>
          <ul className="theme-toggle" >
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </header>
      <Screen  result={this.state.result}/>
      <Keypad  onClick={this.onClick}/>
     </div>
    </div>
  );
}}

export default App;
