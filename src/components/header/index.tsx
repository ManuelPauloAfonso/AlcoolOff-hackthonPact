import { Image } from "react-native";
import {
  ContainerHeader,
  ContainerTextImage,
  ImageContainer,
  TextImage,
} from "./style";
import profile from "../../assets/manuel.png";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

export default function Header() {
  return (
    <ContainerHeader>
      <ContainerTextImage>
        <ImageContainer>
          <Image source={profile} width={5} height={10} />
        </ImageContainer>
        {/* <TextImage>Manuel Afonso</TextImage> */}
      </ContainerTextImage>
      <Ionicons name="notifications" size={20} color="#199a8e" />
    </ContainerHeader>
  );
}
