import { useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidLogOutCircle } from 'react-icons/bi';
import { CgLogOut } from 'react-icons/cg';
import { FaPowerOff, FaUser } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdNotificationsActive, MdSettingsSuggest } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <main
      className="flex flex-col"
      onClick={() => {
        if (showMenu) toggleMenu();
      }}
    >
      <header className="w-full h-20 border-b border-gray-500/10 flex items-center justify-end px-10 relative gap-5">
        <div>
          <button className="rounded-full relative border border-primary hover:bg-primary bg-opacity-80 hover:bg-opacity-100 h-10 w-10 flex items-center justify-center text-primary hover:text-white transition-all duration-300">
            <AiFillMessage size={20} />

            <div className="absolute w-5 h-5 rounded-full flex items-center justify-center bg-red-600 -top-2 -right-2">
              <span className=" text-white text-[8px] font-bold">10</span>
            </div>
          </button>
        </div>
        <div>
          <button className="rounded-full relative border border-primary hover:bg-primary bg-opacity-80 hover:bg-opacity-100 h-10 w-10 flex items-center justify-center text-primary hover:text-white transition-all duration-300">
            <MdNotificationsActive size={20} />

            <div className="absolute w-5 h-5 rounded-full flex items-center justify-center bg-red-600 -top-2 -right-2">
              <span className=" text-white text-[8px] font-bold">10</span>
            </div>
          </button>
        </div>
        <div>
          <img
            className="w-10 h-10  rounded-full cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
            alt="user photo"
            onClick={toggleMenu}
          />

          <div
            className={`${
              showMenu ? 'block' : 'hidden'
            } absolute w-52 h-auto rounded-lg overflow-hidden flex flex-col top-[calc(100%-15px)] right-16 border border-gray-500/20 bg-primary text-white transition-all duration-300`}
          >
            <header className="px-3 py-2 border-b border-white/20">
              <h3 className="text-sm font-bold">Cristhian Rodríguez</h3>
              <h5 className="text-xs tracking-tighter text-gray-200">
                crisrodam1996@gmail.com
              </h5>
            </header>

            <section className="flex flex-col">
              <NavLink className="flex items-center gap-2 text-gray-200 p-3 hover:text-white hover:bg-white/10 transition-colors duration-300">
                <FaUser size={14} />
                <span className="">Perfil</span>
              </NavLink>
              <NavLink className="flex items-center gap-2 text-gray-200 p-3 hover:text-white hover:bg-white/10 transition-colors duration-300">
                <MdSettingsSuggest size={14} />
                <span className="">Configuración</span>
              </NavLink>
              <NavLink className="flex items-center gap-2 text-gray-200 p-3 hover:text-white hover:bg-white/10 transition-colors duration-300">
                <FaPowerOff size={14} />
                <span className="">Cerrar sesión</span>
              </NavLink>
            </section>
          </div>
        </div>
      </header>
    </main>
  );
};
export default Dashboard;
