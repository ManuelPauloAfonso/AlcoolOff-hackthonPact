import styled from "styled-components/native";
import fonts from "../../style/fonts";

export const ContainerDepoimento = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Card = styled.View`
  width: 123px;
  height: 173px;
  background: #fff;
  border: 1px solid #e8f3f1;
  border-radius: 11px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
`;

export const TitleCardDepoiment = styled.Text`
  font-family: ${fonts.medium};
  font-size: 16px;
`;

export const DepoimentsCard = styled.Text`
  font-family: ${fonts.medium};
  font-size: 12px;
  color: #adadad;
`;

export const TitleDepoiment = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  color: white;
`;
