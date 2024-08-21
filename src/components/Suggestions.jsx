// Suggestions.js
import React from 'react';
import styled from 'styled-components';

const SuggestionsContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SuggestionsTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const Suggestion = styled.p`
  font-size: 16px;
  color: #666;
`;

const Suggestions = ({ suggestions }) => (
  <SuggestionsContainer>
    <SuggestionsTitle>Suggestions</SuggestionsTitle>
    {suggestions.map((suggestion, index) => (
      <Suggestion key={index}>{suggestion}</Suggestion>
    ))}
  </SuggestionsContainer>
);

export default Suggestions;
