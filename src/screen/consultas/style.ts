import fonts from "../../style/fonts";
import styled from "styled-components/native";

export const ContainerConsultas = styled.View`
  flex: 1;
  background-color: #ffff;
  padding: 10px;
`;

export const CardConsultas = styled.View`
  border-radius: 15px;
  border: 1px solid #e8f3f1;
  background: #fff;
  width: 46px;
  height: 64px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
`;

export const CardTextTitleTime = styled.Text`
  font-family: ${fonts.medium};
  font-size: 18px;
`;

export const CardTextTitleTimeDescription = styled.Text`
  color: #a1a8b0;
  font-family: ${fonts.regular};
  font-size: 10px;
`;

export const About = styled.Text`
  font-size: 12px;
  font-family: ${fonts.regular};
  color: #717784;
`;
export const AboutTitle = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
`;

export const CardHours = styled.View`
  border-radius: 15px;
  border: 1px solid #deece9;
  background: #fff;
  width: 103px;
  height: 37px;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 12px;
  font-family: ${fonts.regular};
`;

export const ContainerHours = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const ContainerForm = styled.View``;

export const TextInputForm = styled.TextInput`
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  width: 335px;
  height: 56px;
  font-family: ${fonts.regular};
  margin-top: 20px;
  padding-left: 16px;
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

export const TextButton = styled.Text`
  font-size: 12px;
  font-family: ${fonts.medium};
  color: white;
`;

export const TitleModal = styled.Text`
  font-size: 12px;
  font-family: ${fonts.medium};
`;
