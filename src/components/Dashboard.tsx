import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import dummyData from '../data/dummyData';
import CustomPieChart from './charts/PieChart';
import ActivityChart from './charts/ActivityChart';
import { FaBox, FaTruck, FaTimesCircle, FaDollarSign, FaBullseye, FaUtensils, FaList, FaArrowRight } from 'react-icons/fa';
import Card from './Card';

const Dashboard: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('weekly');

  const dataPie = [{ name: 'Profit', value: 80 }, { name: 'Loss', value: 20 }];
  const COLORS = ['#0088FE', '#FFBB28'];

  const dataBar = activeTab === 'weekly' ? dummyData.weekly : dummyData.daily;

  const totalOrders = dummyData.orders.length;
  const totalDeliveries = dummyData.orders.filter(order => order.status === 'Delivered').length;
  const totalCancelled = dummyData.orders.filter(order => order.status === 'Cancelled').length;
  const totalRevenue = dummyData.orders.reduce((acc, order) => acc + parseFloat(order.amount.replace('₹', '').replace(',', '')), 0);

  return (
    <div className={`grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:gap-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      
      <div className={`col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <Card
          icon={FaBox}
          backgroundColor={`${darkMode ? 'bg-blue-800' : 'bg-blue-200'}`}
          iconColor={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
          title="Total Orders"
          value={totalOrders.toString()}
        />
        <Card
          icon={FaTruck}
          backgroundColor={`${darkMode ? 'bg-green-800' : 'bg-green-200'}`}
          iconColor={`${darkMode ? 'text-green-400' : 'text-green-600'}`}
          title="Total Deliveries"
          value={totalDeliveries.toString()}
        />
        <Card
          icon={FaTimesCircle}
          backgroundColor={`${darkMode ? 'bg-red-800' : 'bg-red-200'}`}
          iconColor={`${darkMode ? 'text-red-400' : 'text-red-600'}`}
          title="Total Cancelled"
          value={totalCancelled.toString()}
        />
        <Card
          icon={FaDollarSign}
          backgroundColor={`${darkMode ? 'bg-yellow-800' : 'bg-yellow-200'}`}
          iconColor={`${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}
          title="Total Revenue"
          value={totalRevenue.toString()}
        />
      </div>

      <div className={`col-span-1 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Net Profit</h2>
        <CustomPieChart data={dataPie} colors={COLORS} />
      </div>

      <div className={`col-span-1 md:col-span-2 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Activity Chart</h2>
        <ActivityChart data={dataBar} onTabChange={(e) => setActiveTab(e.target.value)} activeTab={activeTab} />
      </div>

      <div className={`col-span-1 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="flex flex-col space-y-4">
          <div className={`flex items-center p-4 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
            <FaBullseye className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-4`} />
            <span className={`text-xl font-medium flex-grow ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Goals</span>
            <div className={`w-8 h-8 flex items-center justify-center ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full`}>
              <FaArrowRight className={`text-gray-200`} />
            </div>
          </div>
          <div className={`flex items-center p-4 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
            <FaUtensils className={`text-3xl ${darkMode ? 'text-green-400' : 'text-green-600'} mr-4`} />
            <span className={`text-xl font-medium flex-grow ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Popular Dishes</span>
            <div className={`w-8 h-8 flex items-center justify-center ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full`}>
              <FaArrowRight className={`text-gray-200`} />
            </div>
          </div>
          <div className={`flex items-center p-4 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
            <FaList className={`text-3xl ${darkMode ? 'text-yellow-400' : 'text-yellow-600'} mr-4`} />
            <span className={`text-xl font-medium flex-grow ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Menu</span>
            <div className={`w-8 h-8 flex items-center justify-center ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full`}>
              <FaArrowRight className={`text-gray-200`} />
            </div>
          </div>
        </div>
      </div>

      <div className={`col-span-1 md:col-span-2 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className={`min-w-full text-left border-collapse ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-900'} rounded-lg overflow-hidden`}>
            <thead className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'} text-gray-600 dark:text-gray-300`}>
              <tr>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Order Number</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.orders.slice(0, 4).map((order) => (
                <tr key={order.id} className={`hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} transition-colors`}>
                  <td className="py-2 px-4 border-b">{order.customer}</td>
                  <td className="py-2 px-4 border-b">{order.orderNumber}</td>
                  <td className="py-2 px-4 border-b">{order.amount}</td>
                  <td className={`py-2 px-4 border-b font-semibold 
                    ${order.status === 'Delivered' ? 'text-green-500' : 
                       order.status === 'Pending' ? 'text-yellow-500' : 
                       'text-red-500'}`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`col-span-1 ${darkMode ?'bg-gray-800' : 'dark:bg-gray-200'}  p-4 rounded-lg`}>
        <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Customer Feedback</h2>
        <div className="overflow-y-auto h-48">
          {dummyData.feedback.map((feedback) => (
            <div key={feedback.id} className="mb-4">
              <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{feedback.customer}</h3>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-400 ${i < feedback.rating ? 'text-yellow-500' : ''}`}>★</span>
                ))}
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
