import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

const Routes = () => {
  const [isLoging, setIsLoggedin] = useState(false);
  return (
    <NavigationContainer>
      {isLoging ? <AppNavigation /> : <AuthNavigation setIsLoggedin={setIsLoggedin}/>}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
