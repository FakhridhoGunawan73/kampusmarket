import { Card, Text } from "react-native-paper";
import { Image, StyleSheet } from "react-native";

export default function ProductCard({ product }) {
  return (
    <Card style={styles.card}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
      />

      <Card.Content>
        <Text variant="titleMedium">
          {product.title}
        </Text>

        <Text variant="bodyMedium">
          ${product.price}
        </Text>

        <Text
          variant="bodySmall"
          numberOfLines={2}
        >
          {product.description}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginVertical: 8,
  },

  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});