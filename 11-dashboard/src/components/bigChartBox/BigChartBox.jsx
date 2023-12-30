import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./bigChartBox.scss";
  
  const data = [
    {
      name: "Sun",
      books: 5050,
      clothes: 2400,
      electronic: 2400
    },
    {
      name: "Mon",
      books: 6000,
      clothes: 1400,
      electronic: 2250
    },
    {
      name: "Tue",
      books: 150,
      clothes: 9800,
      electronic: 2300
    },
    {
      name: "Wed",
      books: 2780,
      clothes: 3900,
      electronic: 2000
    },
    {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2200
    },
    {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500
    },
    {
      name: "Sat",
      books: 3300,
      clothes: 4200,
      electronic: 2050
    }
  ];
  
  const BigChartBox = () => {
    return (
      <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{top: 10,right: 30,left: 0,bottom: 0}}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8"/>
              <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
              <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BigChartBox;