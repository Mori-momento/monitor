import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="">
      </header>
      <Homepage />
      <SignUp/>
      <Login/>
    </div>
  );
}

export default App;
