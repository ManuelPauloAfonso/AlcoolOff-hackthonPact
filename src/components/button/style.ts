import styled from "styled-components/native";
import fonts from "../../style/fonts";

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  width: 335px;
  height: 50px;
  background-color: #199a8e;
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  color: white;
`;
