import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className='form'>
        <h1>FORM</h1>
          <div className='input-container'>
            <label>User Name</label>
            <input type='text' className='input' />
          </div>
          <div className='input-container'>
            <label>Password</label>
            <input type='passwors' className='input' />
          </div>
          <input type='submit' className='submit' />
      </form>
    </div>
  );
}

export default App;
