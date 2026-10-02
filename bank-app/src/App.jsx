import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from './Components/Signup';
import Homepage from './Components/Pages/Homepage';
import Login from './Components/Login';
import { Toaster, ToastBar } from "react-hot-toast";
import FullPageLoader from './Components/FullPageLoader';
import { useEffect, useState } from 'react';
import ResetPassword from './Components/ResetPassword';
import ForgotPassword from './Components/ForgotPassword';
import ResetSuccess from './Components/resetSucess';
import NotFound from './Components/NotFound';
import EmailCheck from './Components/EmailCheck';
// import ResDrawer from './Components/ResponsiveDrawer';
import UserDashboard from './Components/NairaNestDashboard';
import Account from './Components/Account';
import Transactions from './Components/Transactions';
import Settings from './Components/Settings';
import MainDashboard from './Components/MainDashboard';
import PrivateRoute from './Components/PrivateRoute';
import AdminUsers from './Components/AdminUsers';
import AdminTransactions from './Components/AdminTransactions';
import AdminLayout from './Components/AdminLayout';
import AdminOverview from './Components/AdminOverview';



const getToastElementId = (toast) => {
  const message = typeof toast.message === 'string' ? toast.message : toast.type;
  const messageSlug = message
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48) || toast.type;
  const uniqueToastId = toast.id.replace(/[^a-zA-Z0-9_-]/g, '-');

  return `toast-${toast.type}-${messageSlug}-${uniqueToastId}`;
};


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }
  console.log("App component rendered");
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}>
        {(toast) => (
          <ToastBar toast={toast}>
            {({ icon, message }) => (
              <span
                id={getToastElementId(toast)}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                {icon}
                {message}
              </span>
            )}
          </ToastBar>
        )}
      </Toaster>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/drawerr" element={<ResDrawer/>}/> */}
        <Route path="/checkEmail" element={<EmailCheck />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/reset-success" element={<ResetSuccess />} />
        <Route
          path="/dashboard/user"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<MainDashboard />} />
          <Route path="/dashboard/user/account" element={<Account />} />
          <Route path="/dashboard/user/transactions" element={<Transactions />} />
          <Route path="/dashboard/user/settings" element={<Settings />} />
        </Route>
        <Route
          path="/dashboard/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>}
        >
          <Route index element={<AdminOverview/>} />
          <Route path="/dashboard/admin/users" element={<AdminUsers />} />
          <Route path="/dashboard/admin/transactions" element={<AdminTransactions />} />
        </Route>
      </Routes>
    </>
  )
}

export default App