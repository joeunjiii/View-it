import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './main/Main';
import Login from './login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />   
        <Route path="/login" element={<Login />} />          
        <Route path="/main" element={<Main />} />
        
      </Routes>
    </Router>
  );
}
export default App;
