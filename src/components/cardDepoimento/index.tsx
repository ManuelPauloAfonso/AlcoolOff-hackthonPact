import React, { useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import {
  Card,
  ContainerDepoimento,
  DepoimentsCard,
  TitleCardDepoiment,
  TitleDepoiment,
} from "./style";
import { Depoiment } from "../../data/depoiment";

export default function CardDepoimento() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const renderCardItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <Card key={item.id}>
        <View style={{ padding: 10 }}>
          <Image source={item.image} width={50} height={50} />
        </View>
        <TitleCardDepoiment>{item.name}</TitleCardDepoiment>
        <DepoimentsCard>{item.testimony}</DepoimentsCard>
      </Card>
    </TouchableOpacity>
  );

  const handleCardPress = (item) => {
    setSelectedStory(item);
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ContainerDepoimento>
      <FlatList
        data={Depoiment}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={renderCardItem}
        showsHorizontalScrollIndicator={false}
      />

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View>
          <Image source={selectedStory?.image} width={100} height={100} />
          <TitleDepoiment>{selectedStory?.name}</TitleDepoiment>
          <DepoimentsCard>{selectedStory?.testimony}</DepoimentsCard>
          <DepoimentsCard>{selectedStory?.story}</DepoimentsCard>
        </View>
      </Modal>
    </ContainerDepoimento>
  );
}
