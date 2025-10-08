import React from "react";
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";

const Ratings = ({ratings}) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="orange" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Ratings;
