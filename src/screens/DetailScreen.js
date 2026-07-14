import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

export default function DetailScreen() {
  const route = useRoute();

  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
      />

      <Text
        variant="headlineSmall"
        style={styles.title}
      >
        {product.title}
      </Text>

      <Text variant="titleMedium">
        ${product.price}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <Text>
        Category : {product.category}
      </Text>

      <Text>
        Stock : {product.stock}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    marginVertical: 20,
    lineHeight: 22,
  },
});