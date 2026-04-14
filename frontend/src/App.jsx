import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Logs from './pages/Logs';
import Login from './pages/Login';

function App() {
    return (
      <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/logs">Logs</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path ="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
      </BrowserRouter>
    );
}
    
export default App;
 

