
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../styles/TodayScoreChart.css';

const TodayScoreChart = ({ score }: { score: number }) => {
  const data = [
    { name: 'Completed', value: score },
    { name: 'Remaining', value: 1- score },
  ];

  return (
    <div className="score-chart">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
          width={730}
          height={250}
            data={data}
            innerRadius="80%"
            outerRadius="90%"
            startAngle={180}
            endAngle={-180}
        
            dataKey="value"
          >
            <Cell key="Completed" fill="#FF0000" />
            <Cell key="Remaining" fill="#FBFBFB" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-text">
        <span >{`${score *100 }%`}</span>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default TodayScoreChart;