import styled from "styled-components/native";
import fonts from "../../style/fonts";

export const ContainerWelcome = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const TitleWelcome = styled.Text`
  color: black;
  font-size: 27px;
  text-align: center;
  font-weight: 700;
`;

export const TitleDescription = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #b4b4b4;
  font-family: ${fonts.regular};
  margin-top: 16px;
`;

export const ContainerDots = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 90px;
`;
