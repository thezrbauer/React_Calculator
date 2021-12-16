import './index.css';
import Screen from './Components/screen';



function App() {

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
     <Screen onClick={this.onClick}/>
     <div className="container">
      <div className="keyboard-top">
        <div className="btn-container">
          <button className="btn">
            <h4>7</h4></button>
        </div>
        <div className="btn-container"> 
          <button className="btn">
            <h4>8</h4>
            </button>
          </div>
        <div className="btn-container">
           <button className="btn"> 
           <h4>9</h4>
           </button>
           </div>
        <div className="btn-container"> 
          <button className="btn odd-btn">
          <h4 id="del">DEL</h4>
            </button>
          </div>
         
          <div className="btn-container">
          <button className="btn">
          <h4>4</h4>
            </button>
        </div>
        <div className="btn-container"> 
          <button className="btn">
          <h4>5</h4>
            </button>
          </div>
        <div className="btn-container">
           <button className="btn">
           <h4>6</h4>
             </button>
           </div>
        <div className="btn-container"> 
          <button className="btn">
          <h4>+</h4>
            </button>
          </div>

          <div className="btn-container">
          <button className="btn">
          <h4>3</h4>
            </button>
        </div>
        <div className="btn-container"> 
          <button className="btn">
          <h4>2</h4>
            </button>
          </div>
        <div className="btn-container">
           <button className="btn">
           <h4>1</h4>
             </button>
           </div>
        <div className="btn-container"> 
          <button className="btn">
          <h4>-</h4>
            </button>
          </div>

          <div className="btn-container">
          <button className="btn">
          <h4>.</h4>
            </button>
        </div>
        <div className="btn-container"> 
          <button className="btn">
          <h4>0</h4>
            </button>
          </div>
        <div className="btn-container">
           <button className="btn">
           <h4>/</h4>
             </button>
           </div>
        <div className="btn-container"> 
          <button className="btn">
          <h4>x</h4>
            </button>
          </div>
          </div>

          <div className="keyboard-btm">
          <div className="btn-container">
           <button className="btm-btn reset">Reset</button>
           </div>
          <div className="btn-container"> 
          <button className="btm-btn equal">=</button>
          </div>
          </div>

    

     </div>
     </div>
    </div>
  );
}

export default App;
