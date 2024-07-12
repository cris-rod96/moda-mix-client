import { useState } from 'react';
import { BiCart, BiSearchAlt, BiUser } from 'react-icons/bi';
import { FaPowerOff, FaUser } from 'react-icons/fa';
import {
  MdAttachMoney,
  MdNotificationsActive,
  MdSettingsSuggest,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import KingdomFlag from '../../assets/icon/KingdomFlag';
import SpanishFlag from '../../assets/icon/SpanishFlag';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import CountUp from 'react-countup';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [switchLanguage, setSwitchLanguage] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };
  const closeSwitchLanguage = () => {
    setSwitchLanguage(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (toggleLanguage) closeSwitchLanguage();
  };
  const toggleLanguage = () => {
    setSwitchLanguage(!switchLanguage);
    if (showMenu) closeMenu();
  };

  return (
    <main
      className="flex flex-col h-full"
      onClick={() => {
        if (showMenu) closeMenu();
        if (switchLanguage) closeSwitchLanguage();
      }}
    >
      <header className="w-full h-20 border-b border-gray-500/10 flex items-center justify-between px-10 relative gap-5 bg-white">
        <div className="flex items-center border border-gray-500/10 focus-within:border-gray-500/20 rounded-lg overflow-hidden">
          <div className="w-10 flex items-center justify-center ">
            <BiSearchAlt size={24} className="text-gray-300" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="p-2 outline-0 text-neutral-500"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-5 h-full">
          <div className="h-full relative flex items-center">
            <div className="cursor-pointer" onClick={toggleLanguage}>
              <SpanishFlag />
            </div>
            <div
              className={`${
                switchLanguage ? 'block' : 'hidden'
              } absolute w-48 h-auto flex flex-col rounded-lg top-[calc(100%-15px)] right-0 border border-gray-500/20 bg-white text-primary font-bold transition-all duration-300`}
            >
              <button className="flex gap-2 items-center px-2 py-3 hover:bg-gray-500/10">
                <SpanishFlag />
                <span>Español (Default)</span>
              </button>
              <button className="flex gap-2 items-center px-2 py-3 hover:bg-gray-500/10 ">
                <KingdomFlag />
                <span>English</span>
              </button>
            </div>
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
        </div>
      </header>

      <section className="px-10 py-5 flex flex-col gap-10">
        <h1 className="text-2xl text-primary font-bold">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-2">
          <article className="h-40 border border-gray-500/10 rounded-2xl bg-white flex items-center justify-between px-10 cursor-pointer hover:bg-gray-500/5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">$ 10,540</h3>
              <h5 className="text-gray-400 tracking-tighter m-0 text-lg">
                Ingresos totales
              </h5>
              <h6 className="flex items-center gap-1 text-green-500">
                <span>22.45%</span>
                <HiArrowTrendingUp />
              </h6>
            </div>
            <span className="h-12 w-12 flex items-center justify-center bg-primary text-white rounded-full">
              <MdAttachMoney size={24} />
            </span>
          </article>

          <article className="h-40 border border-gray-500/10 rounded-2xl bg-white flex items-center justify-between px-10 cursor-pointer hover:bg-gray-500/5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">
                <CountUp start={0} end={520} duration={3} />
              </h3>
              <h5 className="text-gray-400 tracking-tighter m-0 text-lg">
                Pedidos
              </h5>
              <h6 className="flex items-center gap-1 text-green-500">
                <span>22.45%</span>
                <HiArrowTrendingUp />
              </h6>
            </div>
            <span className="h-12 w-12 flex items-center justify-center bg-primary text-white rounded-full">
              <BiCart size={24} />
            </span>
          </article>

          <article className="h-40 border border-gray-500/10 rounded-2xl bg-white flex items-center justify-between px-10 cursor-pointer hover:bg-gray-500/5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">
                <CountUp start={0} end={1540} duration={3} />
              </h3>
              <h5 className="text-gray-400 tracking-tighter m-0 text-lg">
                Usuarios
              </h5>
              <h6 className="flex items-center gap-1 text-green-500">
                <span>22.45%</span>
                <HiArrowTrendingUp />
              </h6>
            </div>
            <span className="h-12 w-12 flex items-center justify-center bg-primary text-white rounded-full">
              <BiUser size={24} />
            </span>
          </article>

          <article className="h-40 border border-gray-500/10 rounded-2xl bg-white flex items-center justify-between px-10 cursor-pointer hover:bg-gray-500/5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">1540</h3>
              <h5 className="text-gray-400 tracking-tighter m-0 text-lg">
                Algo más
              </h5>
              <h6 className="flex items-center gap-1 text-green-500">
                <span>22.45%</span>
                <HiArrowTrendingUp />
              </h6>
            </div>
            <span className="h-12 w-12 flex items-center justify-center bg-primary text-white rounded-full">
              <BiUser size={24} />
            </span>
          </article>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-2 gap-5 h-[510px]">
          <div className="border border-gray-500/20 rounded-lg h-full overflow-y-auto bg-white">
            <header className="flex justify-center items-center px-10 pt-5">
              <h3 className="font-bold uppercase text-lg">
                Transacciones recientes
              </h3>
            </header>

            {/* Table */}
            <table className="flex flex-col px-10 pt-2">
              <thead className="w-full">
                <tr className="w-full flex justify-between items-center border-b border-gray-500/20 py-5 [&>th]:text-th [&>th]:font-light [&>th]:text-left">
                  <th className="w-2/5">Nombre</th>
                  <th className="w-1/5">Fecha</th>
                  <th className="w-1/5">Monto</th>
                  <th className="w-1/5">Estado</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="w-full flex justify-between items-center py-5 border-b border-gray-500/20  [&>td]:text-left">
                  <td className="w-2/5">Cristhian Rodríguez</td>
                  <td className="w-1/5 font-light">20.10.2024</td>
                  <td className="w-1/5 font-light">$ 1500.20</td>
                  <td className="w-1/5 font-light ">
                    <span className="px-2 py-1 bg-green-400 text-green-800 rounded-md">
                      Pagado
                    </span>
                  </td>
                </tr>
                <tr className="w-full flex justify-between items-center py-5 border-b border-gray-500/20  [&>td]:text-left">
                  <td className="w-2/5">Cristhian Rodríguez</td>
                  <td className="w-1/5 font-light">20.10.2024</td>
                  <td className="w-1/5 font-light">$ 1500.20</td>
                  <td className="w-1/5 font-light ">
                    <span className="px-2 py-1 bg-yellow-300 text-yellow-800 rounded-md">
                      Pendiente
                    </span>
                  </td>
                </tr>
                <tr className="w-full flex justify-between items-center py-5 border-b border-gray-500/20  [&>td]:text-left">
                  <td className="w-2/5">Cristhian Rodríguez</td>
                  <td className="w-1/5 font-light">20.10.2024</td>
                  <td className="w-1/5 font-light">$ 1500.20</td>
                  <td className="w-1/5 font-light ">
                    <span className="px-2 py-1 bg-gray-400 text-gray-800 rounded-md">
                      Cancelado
                    </span>
                  </td>
                </tr>
                <tr className="w-full flex justify-between items-center py-5 border-b border-gray-500/20  [&>td]:text-left">
                  <td className="w-2/5">Cristhian Rodríguez</td>
                  <td className="w-1/5 font-light">20.10.2024</td>
                  <td className="w-1/5 font-light">$ 1500.20</td>
                  <td className="w-1/5 font-light ">
                    <span className="px-2 py-1 bg-red-400 text-red-800 rounded-md">
                      Rechazado
                    </span>
                  </td>
                </tr>
                <tr className="w-full flex justify-between items-center py-5 border-b border-gray-500/20  [&>td]:text-left">
                  <td className="w-2/5">Cristhian Rodríguez</td>
                  <td className="w-1/5 font-light">20.10.2024</td>
                  <td className="w-1/5 font-light">$ 1500.20</td>
                  <td className="w-1/5 font-light ">
                    <span className="px-2 py-1 bg-yellow-300 text-yellow-800 rounded-md">
                      Pendiente
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot className="py-2 h-full flex items-center justify-center ">
                <span className="text-gray-400">Últimas 5 transacciones</span>
              </tfoot>
            </table>
          </div>
          <div className="border border-gray-500/20 rounded-lg"></div>
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
