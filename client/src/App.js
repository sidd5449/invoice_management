import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import GenerateInvoice from './pages/GenerateInvoice/GenerateInvoice';
import Auth from './pages/Auth/Auth';
import Landing from './pages/Landing/Landing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Invoice from './pages/Invoice/Invoice';
import InvoiceToClient from './pages/InvoiceToClient/InvoiceToClient';
import Dashboard from './pages/Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import InvoicePreview from './pages/InvoicePreview/InvoicePreview';

function App() {
  const isAuth = Boolean(useSelector((state) => state.user))
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/preview' element={<InvoicePreview />} />
        <Route path='/:userId/dashboard' element={isAuth ? <Dashboard />: <Navigate to="/auth/?registered=false" />} />
        <Route path='/generateInvoice' element={isAuth ? <GenerateInvoice />: <Navigate to="/auth/?registered=false" />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/invoice/:id/' element={isAuth ? <Invoice />: <Navigate to="/auth/?registered=false" />} />
        <Route path='/view/invoice/:id' element={<InvoiceToClient />} />
      </Routes>
      <ToastContainer theme='dark' />
    </div>
  );
}

export default App;
