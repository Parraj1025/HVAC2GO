import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Diagnostic from './components/Diagnostic';
import NotRunning from './components/NotRunning';
import OutsideRunning from './components/OutsideRunning';
import InsideRunning from './components/InsideRunning';
import FloatSwitch from './components/FloatSwitch';
import Form from './components/Form';
import Login from './components/Login'; // Ensure you import the Login component
import Register from './components/Register'; // Ensure you import the Register component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/air-conditioning/diag" element={<Diagnostic />}/> 
        <Route path="/air-conditioning/diag2" element={<NotRunning />}/>
        <Route path='/air-conditioning/diag3' element={<InsideRunning />}/>
        <Route path='/air-conditioning/diag4' element={<OutsideRunning />}/>
        <Route path='/air-conditioning/Float' element={<FloatSwitch />}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
