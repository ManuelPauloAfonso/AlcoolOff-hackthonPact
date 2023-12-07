import { ScrollView, Text } from "react-native";
import {
  ButtonHome,
  CardExplorar,
  ContainerExplorar,
  TextButton,
  TitleDescription,
  TitleExplore,
} from "./style";
import { exploreData } from "../../data/explore";

export default function Explorar() {
  return (
    <ScrollView>
      <ContainerExplorar>
        {exploreData.map((item) => (
          <CardExplorar key={item.id}>
            <TitleExplore>{item.title}</TitleExplore>
            <TitleDescription>{item.description}</TitleDescription>
            <ButtonHome>
              <TextButton>explorar</TextButton>
            </ButtonHome>
          </CardExplorar>
        ))}
      </ContainerExplorar>
    </ScrollView>
  );
}
