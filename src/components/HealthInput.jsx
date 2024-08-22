// HealthInput.js
import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const InputTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const HealthInput = ({ onSubmit }) => {
  const [heartRate, setHeartRate] = useState('');
  const [oxygenLevel, setOxygenLevel] = useState('');

  const handleSubmit = () => {
    onSubmit({ heartRate, oxygenLevel });
  };

  return (
    <InputContainer>
      <InputTitle>Input Current Health Situation</InputTitle>
      <InputGroup>
        <Label>Heart Rate (bpm)</Label>
        <Input
          type="number"
          value={heartRate}
          onChange={(e) => setHeartRate(e.target.value)}
          placeholder="Enter current heart rate"
        />
      </InputGroup>
      <InputGroup>
        <Label>Oxygen Levels (SpO2)</Label>
        <Input
          type="number"
          value={oxygenLevel}
          onChange={(e) => setOxygenLevel(e.target.value)}
          placeholder="Enter current oxygen level"
        />
      </InputGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </InputContainer>
  );
};

export default HealthInput;
