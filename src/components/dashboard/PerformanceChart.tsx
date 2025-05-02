
import React from 'react';
import { BarChart as ChartIcon } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { getMonthlyProgress } from '@/data/mockData';

const PerformanceChart = () => {
  const data = getMonthlyProgress();

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-border shadow-sm rounded-md">
          <p className="font-medium">{`${label}`}</p>
          <p className="text-status-done text-sm">
            {`Completed: ${payload[0].value}`}
          </p>
          <p className="text-muted-foreground text-sm">
            {`Total: ${payload[1].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-card animate-fade-in animate-delayed" style={{ '--delay': 5 } as React.CSSProperties}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ChartIcon className="h-5 w-5 text-primary mr-2" />
          <h3 className="font-semibold">Monthly Performance</h3>
        </div>
        <div className="text-sm text-muted-foreground">Last 5 months</div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              width={30}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="total" 
              stroke="#e0e0e0" 
              fill="#f0f0f0" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="completed" 
              stroke="#3B82F6" 
              fill="#3B82F6" 
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
