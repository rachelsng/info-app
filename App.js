import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ContactScreen from "./screens/ContactScreen";
import EventsStack from "./screens/EventsScreen";
import { FontAwesome } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // There is a default color and size set but it can be overwritten
            // color =  'blue'
            // size = '24'

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Events") {
              iconName = "calendar";
            } else if (route.name === "Settings") {
              iconName = "gear";
            } else if (route.name === "Contact") {
              iconName = focused ? "user-circle": "user-circle-o"; //turrey boolean operator
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" options = {{headerShown: false}} component={HomeStack} />
        <Tab.Screen name="Events" options = {{headerShown: false}} component={EventsStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
