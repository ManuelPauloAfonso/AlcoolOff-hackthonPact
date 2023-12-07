import { Text } from "react-native";
import { ContainerHome, TitleDepoiment } from "./style";
import WelcomeHome from "../../components/welcomeHome";
import SearcHome from "../../components/searchHome";
import CardHome from "../../components/cardHome";
import CardDepoimento from "../../components/cardDepoimento";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <ScrollView>
      <ContainerHome>
        <WelcomeHome />
        <SearcHome />
        <CardHome />
        <TitleDepoiment>Depoimentos</TitleDepoiment>
        <CardDepoimento />
      </ContainerHome>
    </ScrollView>
  );
}
