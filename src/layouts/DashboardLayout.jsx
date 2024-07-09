import { Outlet } from 'react-router-dom';
import Aside from '../shared/aside/Aside';
import { useState } from 'react';

const DashboardLayout = () => {
  const [shrink, setShrink] = useState(false);
  const toggleShrink = () => setShrink(!shrink);
  return (
    <>
      <Aside toggleShrink={toggleShrink} shrink={shrink} />
      <main
        className={`${
          shrink ? 'pl-[90px]' : 'pl-[13vw] transition-all duration-300'
        } bg-black text-gray-300 `}
      >
        <Outlet />
      </main>
    </>
  );
};
export default DashboardLayout;
