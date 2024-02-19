import React from 'react';
import styled from 'styled-components/native';


const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
  padding: 0 50px;
`;

const InputField = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ccc;
`;

interface StyledInputProps {
  placeholder: string; 
  value: string; 
  onChangeText: (text: string) => void; 
}


const StyledInput: React.FC<StyledInputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <InputContainer>
      <InputField
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </InputContainer>
  );
};

export default StyledInput;
