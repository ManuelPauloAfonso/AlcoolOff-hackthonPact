import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import fonts from "../../style/fonts";

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  padding: 10px;
  margin-top: 40px;
`;

export const ContainerTextImage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextImage = styled.Text`
  font-size: 14px;
  font-family: ${fonts.medium};
  font-weight: 500;
  margin-left: 10px;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
