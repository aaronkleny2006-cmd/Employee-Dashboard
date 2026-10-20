
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
