import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: #007bff;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px 20px;
  border-radius: 10px;
  border-width: 5px;
  border-color: #0bff;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

interface StyledButtonProps {
  onPress: () => void;
  text?: string;
  title?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ onPress, text, title }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default StyledButton;
