import styled from "styled-components/native";
import fonts from "../../style/fonts";

export const ContainerLogin = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  gap: 16px;
`;

export const TitleLogin = styled.Text`
  font-size: 18px;
  font-family: ${fonts.bold};
  font-weight: 600;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  font-weight: 400;
  color: #7d848d;
`;

export const ContainerInput = styled.View`
  justify-content: center;
  gap: 16px;
`;

export const ForgotPassword = styled.Text`
  color: blue;
  text-align: right;
  margin-bottom: 16px;
  color: #199a8e;
  font-family: ${fonts.medium};
`;

export const SignupText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
`;
