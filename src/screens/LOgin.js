import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOgin = ({ setIsLoggedin }) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Condition = async () => {
    const sEmail = await AsyncStorage.getItem("Email");
    const spassword = await AsyncStorage.getItem("Password");

    if (email === sEmail && password === spassword) {
      navigation.navigate("ProductList");

      setPassword("");
      setEmail("");
    } else {
      Alert.alert("Username and Password are incorrect");
    }
  };

  return (
    <View>
      <Image source={require("../Images/8997261.jpg")} style={styles.image} />

      <View style={styles.pagestyle}>
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
          LOGIN PAGE
        </Text>
      </View>

      <View style={styles.positions}>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.inputstyle}
          placeholder="Enter passWord"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Pressable onPress={Condition}>
          <Text style={styles.buttonstyle}>LOgin</Text>
        </Pressable>
        <Text
          style={styles.singup}
          onPress={() => navigation.navigate("Signup")}
        >
          Signup
        </Text>
      </View>
    </View>
  );
};

export default LOgin;

const styles = StyleSheet.create({
  pagestyle: {
    backgroundColor: "#D7D0FF",
    height: 300,
    width: 340,
    position: "absolute",
    marginTop: 200,
    margin: 10,
    borderRadius: 20,
    opacity: 0.7,
  },
  inputstyle: {
    borderColor: "#BFB9E2",
    borderWidth: 2,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 50,
    height: 50,
    width: 250,
  },
  buttonstyle: {
    backgroundColor: "#FDCA54",
    padding: 15,
    textAlign: "center",
    marginLeft: 105,
    marginRight: 50,
    marginTop: 5,
    fontSize: 25,
    borderRadius: 15,
  },
  positions: {
    position: "absolute",
    marginTop: 230,
  },
  image: {
    height: 800,
    width: 370,
    resizeMode: "stretch",
    marginRight: 100,
    alignItems: "center",
  },
  singup: {
    marginTop: 10,
    alignSelf: "center",
    marginLeft: 50,
    fontWeight: "600",
  },
});
