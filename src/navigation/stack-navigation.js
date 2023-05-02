import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/pages/home";
import Cart from "../components/pages/cart";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} options={{title: 'Store'}}/>
        <Stack.Screen name="CartPage" component={Cart} options={{title: 'Cart'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export  default StackNavigation;