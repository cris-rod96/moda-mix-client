import { NavLink } from 'react-router-dom';
import { MdApi } from 'react-icons/md';
import { FaChartPie } from 'react-icons/fa';
import { IoBarChartSharp } from 'react-icons/io5';
import { RiUser6Fill } from 'react-icons/ri';

const Aside = () => {
  return (
    <aside className="bg-primary text-gray-200 fixed h-full w-[13vw] border-r border-primary/10">
      <header className="flex items-center justify-between px-6 py-5 bg-secondary">
        <NavLink to="/dashboard">ModaMix</NavLink>
        <button className="p-2 bg-white/20 rounded-lg group">
          <MdApi
            size={18}
            className="group-hover:rotate-[405deg] transition-all duration-300"
          />
        </button>
      </header>
      <section className="flex flex-col">
        <NavLink className="p-6 flex items-center gap-2 border-b border-gray-500/40 hover:bg-white/10 transition-colors duration-300">
          <FaChartPie />
          <span>Ingresos</span>
        </NavLink>
        <NavLink className="p-6 flex items-center gap-2 border-b border-gray-500/40 hover:bg-white/10 transition-colors duration-300">
          <IoBarChartSharp />
          <span>Ventas</span>
        </NavLink>
        <NavLink className="p-6 flex items-center gap-2 border-b border-gray-500/40 hover:bg-white/10 transition-colors duration-300">
          <RiUser6Fill />
          <span>Usuarios</span>
        </NavLink>
      </section>
    </aside>
  );
};
export default Aside;
