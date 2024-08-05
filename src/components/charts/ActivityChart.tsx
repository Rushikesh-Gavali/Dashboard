import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

interface ActivityChartProps {
  data: any[];
  onTabChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  activeTab: string;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data, onTabChange, activeTab }) => {
    const {darkMode}=useTheme();
    
  return (
    <div>
      <select value={activeTab} onChange={onTabChange}   className={`mb-4 p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border`}>
        <option value="weekly">Weekly Sales</option>
        <option value="daily">Daily Sales</option>
      </select>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
