import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  color: #333333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;

  &:focus {
    border-color: #3498db;
    background: #fff;
  }
`;

const InputField = ({ label, type, value, onChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input type={type} value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default InputField;
