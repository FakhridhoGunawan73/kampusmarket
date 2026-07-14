import { Card, Text, Chip } from "react-native-paper";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card} mode="elevated">
        <Image source={{ uri: product.thumbnail }} style={styles.image} />

        <Card.Content>
          <Text variant="titleMedium" numberOfLines={1} style={styles.title}>
            {product.title}
          </Text>

          <View style={styles.infoRow}>
            <Text>⭐ {product.rating}</Text>

            <Text>📦 {product.stock}</Text>
          </View>

          <Chip compact style={styles.chip}>
            {product.category}
          </Chip>

          <Text variant="headlineSmall" style={styles.price}>
            ${product.price}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 18,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  title: {
    marginTop: 10,
    fontWeight: "bold",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  chip: {
    alignSelf: "flex-start",
    marginTop: 10,
  },

  price: {
    marginTop: 12,
    color: "#1976D2",
    fontWeight: "bold",
  },
});
