import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../redux/CartReducer";

const ProductList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const Additem = (item) => {
    dispatch(handleAddToCart(item));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  const rendercategories = ({ item }) => {
    return (
      <View>
        <Pressable
          onPress={() => navigation.navigate("FilterPage", { Details: item })}
        >
          <Text style={styles.filter}> {item}</Text>
        </Pressable>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("Description", { Details: item })}
        style={styles.ProductStyle}
      >
        <Text style={styles.textstyle}>{item.title}</Text>

        <Image source={{ uri: item.image }} style={styles.Imagestyle} />

        <Text style={{ margin: 2, color: "green", marginLeft: 10 }}>
          ${item.price}
        </Text>
        <Pressable onPress={() => Additem(item)}>
          <Text style={styles.buy}>ADD TO CART</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            WishList(item);
          }}
        >
          <Text style={styles.buy}>Wishlist</Text>
        </Pressable>
      </TouchableOpacity>
    );
  };

  const searchProducts = () => {
    // Perform search logic here, e.g., updating state or filtering data
  };

  return (
    <SafeAreaView style={styles.Pagestyle}>
      <Header />
      <TextInput
        placeholder="Search bar"
        style={{
          borderWidth: 2,
          borderColor: "gray",
          width: "90%",
          margin: 2,
        }}
        onChangeText={(text) => {
          setSearchText(text);
          searchProducts(); // Call the search function here
        }}
        value={searchText} // Controlled component
      />

      <FlatList
        horizontal={true}
        data={category}
        renderItem={rendercategories}
        keyExtractor={(item) => item}
      />

      <FlatList
        data={products.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  Pagestyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDFF",
    marginBottom: 50,
  },
  ProductStyle: {
    height: 260,
    width: 165,
    borderColor: "gray",
    borderWidth: 2,
    margin: 7,
    backgroundColor: "#D7D0FF",
    borderRadius: 10,
    elevation: 8,
    shadowColor: "black",
  },
  Imagestyle: {
    height: 120,
    width: 100,
    resizeMode: "contain",
    borderRadius: 10,
    marginLeft: 30,
  },
  textstyle: {
    height: 50,
    width: 165,
    margin: 2,
  },
  buy: {
    textAlign: "center",
    backgroundColor: "#FDCA54",
    marginLeft: 10,
    marginRight: 10,
    padding: 2,
    borderRadius: 10,
    elevation: 8,
    shadowColor: "black",
    margin: 4,
  },
  filter: {
    fontSize: 15,
    backgroundColor: "#9457EB",
    margin: 7,
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
    height: 25,
    color: "white",
    elevation: 8,
    shadowColor: "black",
  },
});
