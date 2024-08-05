import { FaHome, FaChartBar, FaUtensils, FaBullseye } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const { sidebarOpen, closeSidebar,darkMode } = useTheme();

  return (
    <>
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 md:hidden" onClick={closeSidebar}></div>}
      <aside className={`fixed inset-y-0 left-0 transform md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-16 md:w-20 h-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex flex-col items-center py-4 z-20`}>
        <FaHome className="text-2xl my-4" />
        <FaChartBar className="text-2xl my-4" />
        <FaUtensils className="text-2xl my-4" />
        <FaBullseye className="text-2xl my-4" />
      </aside>
    </>
  );
};

export default Sidebar;
