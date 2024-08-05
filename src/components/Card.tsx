import React from 'react';
import { IconType } from 'react-icons';

interface MetricCardProps {
  icon: IconType;
  backgroundColor: string;
  iconColor: string;
  title: string;
  value: string;
}

const Card: React.FC<MetricCardProps> = ({ icon: Icon, backgroundColor, iconColor, title, value }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-lg ${backgroundColor} text-center`}>
      <Icon className={`text-4xl ${iconColor} mb-2`} />
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm mt-1">{title}</span>
    </div>
  );
};

export default Card;
