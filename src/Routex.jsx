import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';

const Routex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default Routex;
