import {
  ButtonHome,
  ContainerCardHome,
  ContainerIntern,
  ContainerTitle,
  TextButton,
} from "./style";
import Logo from "../../assets/Image.png";
import { Image } from "react-native";

export default function CardHome() {
  return (
    <ContainerCardHome>
      <ContainerIntern>
        <ContainerTitle>
          Protejo minha saúde ao enfrentar a dependência em álcool.
        </ContainerTitle>
        <ButtonHome>
          <TextButton>Ler Mais</TextButton>
        </ButtonHome>
      </ContainerIntern>
      <Image source={Logo} style={{ width: 100, height: 100 }} />
    </ContainerCardHome>
  );
}
