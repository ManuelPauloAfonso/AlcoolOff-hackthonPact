import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  About,
  AboutTitle,
  ButtonHome,
  CardConsultas,
  CardHours,
  CardTextTitleTime,
  CardTextTitleTimeDescription,
  CardTitle,
  ContainerConsultas,
  ContainerForm,
  ContainerHours,
  TextButton,
  TextInputForm,
  TitleModal,
} from "./style";
import { DataTime } from "../../data/week";
import { DataHours } from "../../data/hours";
import { Button } from "../../components/button/button";
import { useState } from "react";
import axios from "axios";
import Modal from "react-native-modal";
import Spinner from "react-native-loading-spinner-overlay";

export default function Consultas() {
  const [formData, setFormData] = useState({
    duration: "",
    triggers: "",
    supportSystem: "",
    goals: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await generateResponse(formData);
      setApiResponse(response);
      console.log(response);
      setModalVisible(true);
    } catch (error) {
      console.error("Erro ao chamar a API do ChatGPT:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateResponse = async (data) => {
    const instance = axios.create({
      baseURL: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
    });

    try {
      const response = await instance.post("", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: JSON.stringify(data) }],
      });

      const advice = response.data.choices[0].message.content;
      return advice;
    } catch (error) {
      console.error("Erro ao chamar a API do ChatGPT:", error);
      return "Desculpe, houve um erro ao obter conselhos. Tente novamente mais tarde.";
    }
  };

  const renderCardItem = ({ item }) => (
    <CardConsultas key={item.id}>
      <CardTextTitleTimeDescription>{item.day}</CardTextTitleTimeDescription>
      <CardTextTitleTime>{item.week}</CardTextTitleTime>
    </CardConsultas>
  );

  return (
    <ContainerConsultas>
      <ScrollView>
        <AboutTitle>Marque uma Consulta</AboutTitle>
        <About>
          A app AlcoolOff oferece a possibilidade de marcar uma consulta com um
          profissional para obter ajuda no combate ao alcoolismo.
        </About>
        <ContainerHours>
          {DataHours.map((item) => (
            <CardHours key={item.id}>
              <CardTitle>{item.hour}</CardTitle>
            </CardHours>
          ))}
        </ContainerHours>
        <FlatList
          data={DataTime}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={renderCardItem}
          showsHorizontalScrollIndicator={false}
        />
        <ContainerForm>
          <TextInputForm
            placeholder="Existe algo que costuma ajudar você a manter a sobriedade?"
            onChangeText={(text) => handleInputChange("duration", text)}
          />
          <TextInputForm
            placeholder="Você teve alguma vontade de beber recentemente?"
            onChangeText={(text) => handleInputChange("triggers", text)}
          />
          <TextInputForm
            placeholder="Precisa de ajuda para resistir ao desejo de beber?"
            onChangeText={(text) => handleInputChange("supportSystem", text)}
          />
          <TextInputForm
            placeholder="Como tens lidado com o álcool?"
            onChangeText={(text) => handleInputChange("goals", text)}
          />
        </ContainerForm>
        <Button text="Consultar" onPress={handleSubmit} />
      </ScrollView>
      <Modal isVisible={modalVisible}>
        <ScrollView>
          <View style={styles.modalContainer}>
            <Text>Resultado da Consulta</Text>
            <TitleModal>{apiResponse}</TitleModal>
            <ButtonHome onPress={() => setModalVisible(false)}>
              <TextButton>Fechar</TextButton>
            </ButtonHome>
          </View>
        </ScrollView>
      </Modal>
      <Spinner
        visible={loading}
        textContent={"Carregando..."}
        textStyle={{ color: "#FFF" }}
      />
    </ContainerConsultas>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});
