import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Allroutes from "./router";

export type RootStackParamList = {
  Root: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Root"
    >
      <Stack.Screen name="Root" component={Allroutes} />
    </Stack.Navigator>
  );
};
