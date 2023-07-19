import './App.css';
import { Routes, Route } from 'react-router-dom';
import GenerateInvoice from './pages/GenerateInvoice/GenerateInvoice';
import Auth from './pages/Auth/Auth';
import Landing from './pages/Landing/Landing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Invoice from './pages/Invoice/Invoice';
import InvoiceToClient from './pages/InvoiceToClient/InvoiceToClient';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/generateInvoice' element={<GenerateInvoice />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/invoice/:id' element={<Invoice />} />
        <Route path='/view/invoice/:id' element={<InvoiceToClient />} />
      </Routes>
      <ToastContainer theme='dark' />
    </div>
  );
}

export default App;
