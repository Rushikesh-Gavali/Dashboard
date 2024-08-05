import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 md:ml-[4.2rem]">
            <Dashboard />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
