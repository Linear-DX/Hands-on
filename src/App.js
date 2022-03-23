import logo from './logo.svg';
import './App.css';
// import Search from './pages/home/index.js';
import Home from './components/home/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  {/*  
        <div class="search">        
          <input placeholder="search"></input>
          <button type="submit">Search</button>
        </div>
        <br/>
        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"/>
  */}

      {/* <Search /> */}
        <Home />
      </header>
    </div>
  );
}

export default App;
