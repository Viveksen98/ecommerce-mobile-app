import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductList from "../screens/ProductList";
import BUyNOW from "../screens/BUyNOW";
import Description from "../screens/Description";
import FilterPage from "../screens/filterPage";
import LOgin from "../screens/LOgin";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dasshboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LOgin"
          component={LOgin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BUyNOW"
          component={BUyNOW}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={styles.head}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={styles.head}
        />
        <Stack.Screen
          name="FilterPage"
          component={FilterPage}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
