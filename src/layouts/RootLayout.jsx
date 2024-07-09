import { Outlet } from 'react-router-dom';
import Aside from '../components/shared/Aside';

const RootLayout = () => {
  return (
    <>
      <Aside />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
