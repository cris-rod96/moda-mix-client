import {
  MdFitbit,
  MdOutlinePointOfSale,
  MdBusinessCenter,
  MdAddReaction,
  MdPayments,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa';
import { IoStorefront } from 'react-icons/io5';
import { PiListDashesBold, PiUsersThreeFill } from 'react-icons/pi';
import { FaCommentDots, FaCartShopping } from 'react-icons/fa6';

const Aside = ({ toggleShrink, shrink }) => {
  return (
    <aside
      className={`fixed h-full ${
        shrink ? 'w-[90px]' : 'w-[15vw]'
      } bg-primary border-r border-gray-500/20 flex flex-col transition-all duration-300`}
    >
      <header
        className={`p-8 flex ${
          shrink ? 'flex-col gap-2' : 'flex-row'
        } items-center justify-between bg-secondary text-gray-300 border-b border-gray-500/20 transition-all duration-300`}
      >
        <h1 className={`${shrink ? 'text-sm' : 'text-lg'}`}>ModaMix</h1>
        <button
          className="p-2 bg-white/10 rounded-lg text-gray-300 group"
          onClick={toggleShrink}
        >
          <MdFitbit
            size={24}
            className="group-hover:text-white group-hover:rotate-[360deg] transition-all duration-300"
          />
        </button>
      </header>
      <section className="overflow-y-auto overflow-x-hidden">
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10 hover:bg-gray-500/40`}
        >
          <FaChartPie size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>Ingresos</span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <IoStorefront size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>Productos</span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <PiUsersThreeFill size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>Usuarios</span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <MdOutlinePointOfSale size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>Ventas</span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <MdBusinessCenter size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>
            Proveedores
          </span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <PiListDashesBold size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>
            Categorías
          </span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <MdAddReaction size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>
            Reacciones
          </span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <FaCommentDots size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>
            Comentarios
          </span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <FaCartShopping size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>Carritos</span>
        </NavLink>
        <NavLink
          to="/"
          className={`px-8 ${shrink ? 'py-5' : 'py-6'} flex ${
            shrink ? 'flex-col' : 'flex-row'
          } items-center gap-2 transition-all duration-300 text-gray-300 border-b border-white/10`}
        >
          <MdPayments size={20} />
          <span className={`${shrink ? 'text-sm' : 'text-lg'}`}>Pagos</span>
        </NavLink>
      </section>
    </aside>
  );
};
export default Aside;
