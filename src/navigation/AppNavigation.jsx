import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigation = () => {
  return (
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
        name="Add_to_cart"
        component={Add_to_cart}
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
        name="FilterPage"
        component={FilterPage}
        options={styles.head}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
