import React from "react";
import { Dimensions, Image, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import {
  ContainerDots,
  ContainerWelcome,
  TitleDescription,
  TitleWelcome,
} from "./style";
import { DataScreen } from "../../data/screen";
import { PaginationDots } from "../../components/paginationDots";
import AntDesign from "@expo/vector-icons/AntDesign";
import logo1 from "../../assets/welcome1.png";
import { Button } from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/AuthNavigator";

const { width } = Dimensions.get("window");

export default function Welcome({
  navigation,
}: StackScreenProps<RootStackParamList, "Welcome">) {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, width, 2 * width], [1, 0, 1]),
      transform: [
        {
          translateX: interpolate(
            scrollY.value,
            [0, width, 2 * width],
            [0, -width, 0]
          ),
        },
      ],
    };
  });

  const isLastScreen = (index) => {
    return index === DataScreen.length - 1;
  };

  const gotoLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {DataScreen.map((data, index) => (
        <Animated.View
          key={data.id}
          style={[
            containerStyle,
            { width, justifyContent: "center", alignItems: "center" },
          ]}
        >
          <ContainerWelcome>
            <Image source={data.image} width={100} />
            <View style={{ marginTop: 20 }}>
              <TitleWelcome>{data.title}</TitleWelcome>
              <TitleDescription>{data.description}</TitleDescription>
            </View>
            {isLastScreen(index) && (
              <Button text="Iniciar" onPress={gotoLogin} />
            )}
            <ContainerDots>
              <PaginationDots activeIndex={index} />
            </ContainerDots>
          </ContainerWelcome>
        </Animated.View>
      ))}
    </Animated.ScrollView>
  );
}
