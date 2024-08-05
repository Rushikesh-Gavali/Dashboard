import { FaSearch, FaMoon, FaSun, FaBell, FaEnvelope, FaCog, FaUser, FaBars } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode, toggleSidebar } = useTheme();

  return (
    <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} shadow-md transition-colors`}>
      <button onClick={toggleSidebar} className="text-xl md:hidden">
        <FaBars />
      </button>
      <div className="relative w-full max-w-[10rem] md:max-w-md ml-[4.2rem] lg:max-w-lg">
        <FaSearch className="absolute right-3 top-3 text-gray-500" />
        <input type="text" className={`pl-10 pr-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} w-full`} placeholder="Search..." />
      </div>
      <div className="flex space-x-4 items-center">
        <button onClick={toggleDarkMode} className="text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <FaEnvelope className="text-xl md:inline" />
        <FaBell className="text-xl md:inline" />
        <FaCog className="text-xl md:inline" />
        <FaUser className="text-xl md:inline" />
      </div>
    </header>
  );
};

export default Header;
