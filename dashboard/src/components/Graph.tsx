// Graph.tsx
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Graph = () => {
  // Sample data for the chart
  const data = [
    { name: 'A', value: 4000 },
    { name: 'B', value: 3000 },
    { name: 'C', value: 2000 },
    { name: 'D', value: 2780 },
    { name: 'E', value: 1890 },
    { name: 'F', value: 2390 },
    { name: 'G', value: 3490 },
    { name: 'A', value: 4000 },
    { name: 'B', value: 3000 },
    { name: 'C', value: 2000 },
    { name: 'D', value: 2780 },
    { name: 'E', value: 1890 },
    { name: 'F', value: 2390 },
    { name: 'G', value: 3490 },
  ];

  return (
    <div className="bg-[#f8f9fa]/80 flex-1 shadow-gray-300 rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold mb-4">Graphs and Analysis</h3>
      <div className="flex space-x-2">
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              {/* Add grid lines */}
              <CartesianGrid  stroke="none"/>

              {/* Add the X-axis and Y-axis */}
              <XAxis dataKey="name" />
              <YAxis />

              {/* Add a Tooltip to show data on hover */}
              <Tooltip />

              {/* Add a Legend to show what the bars represent */}
              <Legend />

              {/* Render the Bar chart with color */}
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
            
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
