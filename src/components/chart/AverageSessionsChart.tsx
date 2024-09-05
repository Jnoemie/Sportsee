
import '../../styles/AverageSessionsChart.css';
import { useFetchSessions } from '../hook/use-average-session';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle, } from 'recharts';

type TooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
};
const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
      return (
          <div className="tooltipAverage">
              <p className="tooltip_content">{`${payload[0].value} min`}</p>
          </div>
      );
  }
  return null;
};


type CustomCursorProps = {
  points: { x: number, y: number }[];
  width: number;
  height: number;
  stroke: string;
};

const CustomCursor = ({ points, width, height, stroke }: CustomCursorProps) => {
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="#000"
      stroke={stroke}
      x={x}
      y={y}
      width={width}
      height={height}
      fillOpacity={0.1}
    />
  );
};


export const AverageSessionsChart = ({ userId }: { userId: number }) => {
  const { sessionsData, isLoading, error } = useFetchSessions(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="sessions-chart">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart 
          data={sessionsData?.sessions}
         
        >
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: 'white' }} />
          <YAxis hide domain={['dataMax + 20']} padding={{ bottom: 25 }} />
         
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor points={[{ x: 0, y: 0 }]} width={500} height={400} stroke="#ff0000" />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" dot={false} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;