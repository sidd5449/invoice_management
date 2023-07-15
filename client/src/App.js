import './App.css';
import { Routes, Route } from 'react-router-dom';
import GenerateInvoice from './pages/GenerateInvoice/GenerateInvoice';
import Auth from './pages/Auth/Auth';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/generateInvoice' element={<GenerateInvoice />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
