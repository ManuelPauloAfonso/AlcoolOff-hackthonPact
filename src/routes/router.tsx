import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/home";
import Search from "../screen/search";
import Calendar from "../screen/consultas";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screen/explorar";
import Message from "../screen/message";
import Header from "../components/header";
import ButtonTab from "../components/buttonTab";

const Tab = createBottomTabNavigator();

export default function Allroutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={"#199a8e"} />
          ),
          tabBarLabel: undefined,
          header: (props) => <Header />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={Calendar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
          tabBarLabel: undefined,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => <ButtonTab />,
          tabBarLabel: undefined,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Assistente Virtual"
        component={Message}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" size={size} color={color} />
          ),
          tabBarLabel: undefined,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ellipsis-horizontal-circle-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: undefined,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
