import logo from './Holberton-logo.jpg';
import './App.css';
import './index.css'
import { getFullYear, getFooterCopy } from "./utils";
import Notifications from './Notifications';


function App() {
  return (
    <div className="App">
     <div className="App-header">
      <img src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>
     </div>
      <Notifications />

     <hr />

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Form for email and password */}
        <form>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' />
          </div>

          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' />
          </div>
          <button type='submit'>Ok</button>
        </form>

      </div>

      <hr />

      <footer className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy()}
      </footer>


    </div>
  );
}

export default App;
