import styled from "styled-components/native";
import fonts from "../../style/fonts";

export const ContainerExplorar = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #ffff;
`;

export const CardExplorar = styled.View`
  width: 330px;
  height: 140px;
  background-color: #e8f3f1;
  border-radius: 16px;
  margin-top: 20px;
  padding: 10px;
`;

export const TitleDescription = styled.Text``;

export const TitleExplore = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  max-width: 166px;
`;

export const ButtonExplore = styled.TouchableOpacity``;

export const TittleButton = styled.Text``;

export const ButtonHome = styled.TouchableOpacity`
  width: 97px;
  height: 29px;
  border-radius: 20px;
  background-color: #199a8e;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  font-family: ${fonts.medium};
  color: white;
`;
