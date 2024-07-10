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
          shrink
            ? 'w-[calc(100vw-90px)] ml-[90px]'
            : 'w-[calc(100vw-15vw)] ml-[15vw] transition-all duration-300'
        } `}
      >
        <Outlet />
      </main>
    </>
  );
};
export default DashboardLayout;
