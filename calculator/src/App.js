import './index.css';

function App() {
  return (
    <div className="App">
      <div className="content">
      <header className="wrapper">
        <h1>calc</h1>
        <div className="toggle-wrapper">
          <h3>THEME</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </header>
      <form className="form">
        <h2>399981</h2>
        </form>
     <div className="container">
      <div className="keyboard">
        <div className="btn-container">
          <button className="btn">7</button>
        </div>
        <div className="btn-container"> 
          <button className="btn">8</button>
          </div>
        <div className="btn-container">
           <button className="btn">9</button>
           </div>
        <div className="btn-container"> 
          <button className="btn">DEL</button>
          </div>
         
          <div className="btn-container">
          <button className="btn">4</button>
        </div>
        <div className="btn-container"> 
          <button className="btn">5</button>
          </div>
        <div className="btn-container">
           <button className="btn">6</button>
           </div>
        <div className="btn-container"> 
          <button className="btn">+</button>
          </div>

      </div>

     </div>
     </div>
    </div>
  );
}

export default App;
