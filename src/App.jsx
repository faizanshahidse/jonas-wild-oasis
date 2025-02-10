import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
// import Button from './ui/Button';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AppLayout from './ui/AppLayout';
import Account from './pages/Account';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
