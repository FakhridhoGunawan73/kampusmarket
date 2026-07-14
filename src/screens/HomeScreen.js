import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const navigation = useNavigation();

  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>👋 Selamat Datang</Text>

        <Text style={styles.subtitle}>
          Temukan barang bekas berkualitas untuk kebutuhan kuliahmu.
        </Text>
      </View>

      {/* Search */}
      <Searchbar
        placeholder="Cari produk..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
      />

      {/* Judul */}
      <Text style={styles.sectionTitle}>
        Produk Terbaru
      </Text>

      {/* List Produk */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("Detail", {
                product: item,
              })
            }
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 10,
  },

  greeting: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#666",
    marginTop: 6,
    lineHeight: 22,
  },

  searchBar: {
    marginHorizontal: 15,
    marginBottom: 15,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 18,
    marginBottom: 5,
  },

  list: {
    paddingBottom: 25,
  },
});