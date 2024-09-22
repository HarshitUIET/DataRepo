import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const NewMessage = lazy(() => import('./pages/newMessage'));
const ContactInfo = lazy(() => import('./pages/contactInfo'));
const ContactList = lazy(() => import('./pages/contactList'));
const Otp = lazy(() => import('./pages/Otp'));


function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ContactList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} />
        <Route path="/contact/:id" element={<ContactInfo selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} />
        <Route path="/contact/message" element={<NewMessage  />} />
        <Route path="/contact/:id/otp" element={<Otp />} />
      </Routes>
      </Suspense>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
