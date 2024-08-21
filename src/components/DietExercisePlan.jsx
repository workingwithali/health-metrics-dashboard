// DietExercisePlan.js
import React from 'react';
import styled from 'styled-components';

const PlanContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PlanTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const PlanItem = styled.div`
  margin-bottom: 20px;
`;

const PlanHeading = styled.h4`
  font-size: 18px;
  color: #3498db;
  margin-bottom: 10px;
`;

const PlanDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const DietExercisePlan = ({ dietPlan, exercisePlan }) => (
  <PlanContainer>
    <PlanTitle>Diet & Exercise Plan</PlanTitle>
    <PlanItem>
      <PlanHeading>Diet Plan</PlanHeading>
      <PlanDescription>{dietPlan}</PlanDescription>
    </PlanItem>
    <PlanItem>
      <PlanHeading>Exercise Plan</PlanHeading>
      <PlanDescription>{exercisePlan}</PlanDescription>
    </PlanItem>
  </PlanContainer>
);

export default DietExercisePlan;
