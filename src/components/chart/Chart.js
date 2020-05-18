import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './chart.scss';

function Chart(props) {
  const data = props.data;

  return (
    <div className='chart'>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        style={{ backgroundColor: '#EEEEEE' }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis type="number" domain={['auto', 'auto']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 4 }} />
      </LineChart>
    </div>
  );
}

export default Chart;