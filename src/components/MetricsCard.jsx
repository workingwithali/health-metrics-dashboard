import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  flex: 1;
`;

const MetricValue = styled.div`
  font-size: 36px;
  color: ${(props) => (props.isWarning ? '#e74c3c' : '#333333')};
  display: flex;
  align-items: center;
`;

const WarningIcon = styled.span`
  margin-left: 10px;
  color: #e74c3c;
`;

const MetricTitle = styled.h3`
  font-size: 18px;
  color: #333333;
`;

const MetricsCard = ({ title, value, data, warningThreshold }) => {
  const isWarning = value > warningThreshold;

  return (
    <Card>
      <MetricTitle>{title}</MetricTitle>
      <MetricValue isWarning={isWarning}>
        {value} {isWarning && <WarningIcon>⚠️</WarningIcon>}
      </MetricValue>
      <Line
        data={{
          labels: data.map((_, index) => index),
          datasets: [
            {
              data,
              borderColor: '#3498db',
              borderWidth: 2,
              fill: false,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              display: false,
            },
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </Card>
  );
};

export default MetricsCard;
