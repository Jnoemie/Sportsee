
import { useFetchActivity } from '../hook/use-activity';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "../../styles/UserActivityChart.css";



const UserActivityChart = ({ userId }: { userId: number }) => {
  const { activityData, isLoading, error } = useFetchActivity(userId);
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer height={300} width="100%" >
        <BarChart data={activityData?.sessions} barGap={8}>
          <CartesianGrid strokeDasharray="3 2" vertical={false} />
          <XAxis  tickLine={false} tickFormatter={formatXAxisTick} />
          <YAxis yAxisId="left" orientation="left" tickLine={false} axisLine={false} hide />
          <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} tickCount={3} stroke="#9B9EAC" tickMargin={5
        
        } />
          <Tooltip content={<CustomTooltip />} offset={30} />
          <Legend align="right" verticalAlign="top" iconType="circle" height={36} wrapperStyle={{marginTop:-43}}
          formatter={(value) => {
            return <span style={{ color: '#000000' }}>{value}</span>; // Le texte est toujours noir
          }}
          />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={7} radius={[20, 20, 0, 0]} name="Poids (kg)" />
          <Bar yAxisId="left" dataKey="calories" fill= "#E60000"barSize={7} radius={[20, 20, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="tooltip_content">{`${payload[1].value}kCal`}</p>
        <p className="tooltip_content">{`${payload[0].value}kg`}</p>
      </div>
    );
  }
  return null;
};

const formatXAxisTick = (tick: string) => (parseInt(tick +1)).toString();
export default UserActivityChart;