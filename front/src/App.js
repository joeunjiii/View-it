import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './main/Layout.css';
import Main from './main/Main';
import Login from './login/Login';
import Interview from './main/Interview/Interview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />   
        <Route path="/login" element={<Login />} />          
        <Route path="/main" element={<Main />} />
        <Route path="/Interview" element={<Interview/>} />
        
      </Routes>
    </Router>
  );
}
export default App;
