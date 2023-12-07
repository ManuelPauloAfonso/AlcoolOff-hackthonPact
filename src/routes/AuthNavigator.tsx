import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/login";
import Welcome from "../screen/welcome";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
