interface SummaryCardProps {
  title: string;
  value: number;
  icon: JSX.Element;
}
const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => (
  <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex items-center">
    <div className="text-2xl mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

export default SummaryCard;
