import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Pages from './components/Pages'
import Contamination from './components/Contamination';
import Leaks from './components/Leaks';
import Pipelines from './components/Pipelines';
import ContactUs from './components/Contactus';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App bg-blue-200">
      <header className="">
      </header>
      <Router>
      <div className="container mx-auto px-4">
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/pages" element={<Pages/>} />
          <Route path="/contamination" element={<Contamination/>} />
          <Route path="/pipelines" element={<Pipelines/>} />
          <Route path="/leaks" element={<Leaks/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
