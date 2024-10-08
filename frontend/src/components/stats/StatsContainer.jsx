import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { STATS } from "../../utils/data";

const StatsContainer = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <>
      <h2 className="title">Statistics</h2>
      <div style={{ width: "100%", height: 400 }} className="absolute">
				<ResponsiveContainer>
					<AreaChart data={STATS}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='sessionDate' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Area type='monotone' dataKey='fieldAvg' stroke='#006D77' fill='#006D77' fillOpacity={.8} />
						<Area type='monotone' dataKey='threeAvg' stroke='#83C5BE' fill='#83C5BE' fillOpacity={.8} />
						<Area type='monotone' dataKey='ll' stroke='#363457' fill='#363457' fillOpacity={.8} />
						<Area type='monotone' dataKey='lr' stroke='#603140' fill='#603140' fillOpacity={.8} />
						<Area type='monotone' dataKey='ft' stroke='#E29578' fill='#E29578' fillOpacity={.8} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
    </>
  );
};

export default StatsContainer;
