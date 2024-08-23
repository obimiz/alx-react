import logo from './Holberton-logo.jpg';
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
     <div className="App-header">
      <img src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>
     </div>

     <hr />

      <div className="App-body">
        <p>Login to access the full dashboard</p>

      </div>

      <hr />

      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>


    </div>
  );
}

export default App;
