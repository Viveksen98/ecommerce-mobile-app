import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AuthNavigation = ({setIsLoggedin}) => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
