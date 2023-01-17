import React from 'react'
import Data from '../ElectricityPrices/day-prices-hours.json';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartMaker = () => {
    return (
        <ResponsiveContainer width="100%" height="75%">
          <AreaChart
            width={500}
            height={400}
            data={Data.prices}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="price" stroke="#204f88" fill="#0080ff" />
          </AreaChart>
        </ResponsiveContainer>
      );
}

export default ChartMaker 