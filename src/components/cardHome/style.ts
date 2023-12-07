import styled from "styled-components/native";
import fonts from "../../style/fonts";

export const ContainerCardHome = styled.View`
  width: 335px;
  height: 180px;
  background-color: #e8f3f1;
  border-radius: 16px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  max-width: 166px;
`;

export const ButtonHome = styled.TouchableOpacity`
  width: 97px;
  height: 29px;
  border-radius: 20px;
  background-color: #199a8e;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerIntern = styled.View``;

export const TextButton = styled.Text`
  font-size: 12px;
  font-family: ${fonts.medium};
  color: white;
`;
