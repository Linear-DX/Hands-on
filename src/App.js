import './App.css';
// import Search from './components/searchComponent/search.js';
// import Home from './pages/home/home.js';
import AppRouter from './router/router';

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
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
