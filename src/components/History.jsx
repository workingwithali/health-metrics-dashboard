// History.js
import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const HistoryTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
`;

const History = ({ data }) => (
  <HistoryContainer>
    <HistoryTitle>Previous History</HistoryTitle>
    <HistoryList>
      {data.map((item, index) => (
        <HistoryItem key={index}>
          {item.date}: Heart Rate - {item.heartRate} bpm, Oxygen Levels - {item.oxygenLevels}%
        </HistoryItem>
      ))}
    </HistoryList>
  </HistoryContainer>
);

export default History;
