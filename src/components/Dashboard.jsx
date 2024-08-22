import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import MetricsCard from './MetricsCard';
import Footer from './Footer';
import History from './History';
import Suggestions from './Suggestions';
import DietExercisePlan from './DietExercisePlan';
import HealthInput from './HealthInput';

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin: 20px;
`;
const DashboardContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
`;

const AdditionalInfoContainer = styled.div`
  margin: 20px;
`;

const Dashboard = () => {
  const userProfileImage = "https://your-image-url.com/image.jpg";
  const [healthData, setHealthData] = useState({
    heartRate: 85,
    oxygenLevel: 92,
  });

  const heartRateData = [72, 75, 80, 78, 77, 76, 80, 85, 90];
  const oxygenLevelData = [95, 94, 96, 97, 96, 95, 94, 93, 92];

  const historyData = [
    { date: '2024-08-19', heartRate: 82, oxygenLevels: 94 },
    { date: '2024-08-18', heartRate: 78, oxygenLevels: 95 },
    // More history data
  ];

  const suggestions = [
    'Consider a light walk after dinner to help digestion.',
    'Increase your water intake to improve oxygen levels.',
    // More suggestions
  ];

  const dietPlan = 'Breakfast: Oats with fruit. Lunch: Grilled chicken with salad. Dinner: Steamed vegetables and fish.';
  const exercisePlan = 'Morning: 30 minutes of jogging. Evening: 20 minutes of yoga.';

  const handleHealthInputSubmit = (inputData) => {
    setHealthData({
      heartRate: inputData.heartRate,
      oxygenLevel: inputData.oxygenLevel,
    });
  };

  return (
     <div>
      <ProfileImage src={userProfileImage} alt="Profile" />
      <h1>Welcome to the Dashboard</h1>
      <DashboardContainer>
      <Header />
        <HealthInput onSubmit={handleHealthInputSubmit} />
      <MetricsContainer>
        <MetricsCard title="Heart Rate (bpm)" value={healthData.heartRate} data={heartRateData} warningThreshold={100} />
        <MetricsCard title="Oxygen Levels (SpO2)" value={healthData.oxygenLevel} data={oxygenLevelData} warningThreshold={90} />
        {/* Add additional metrics here */}
      </MetricsContainer>

      <AdditionalInfoContainer>
        <History data={historyData} />
        <Suggestions suggestions={suggestions} />
        <DietExercisePlan dietPlan={dietPlan} exercisePlan={exercisePlan} />
      </AdditionalInfoContainer>

      <Footer timestamp="10:30 AM, Aug 20, 2024" deviceStatus="Connected" />
    </DashboardContainer>
    </div>
    
  );
};

export default Dashboard;
