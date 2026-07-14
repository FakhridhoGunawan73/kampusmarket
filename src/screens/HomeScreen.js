import { View, Text } from "react-native";
import useProducts from "../hooks/useProducts";
import { FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{error}</Text>
      </View>
    );
  }

  return (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <ProductCard product={item} />
    )}
  />
);
}