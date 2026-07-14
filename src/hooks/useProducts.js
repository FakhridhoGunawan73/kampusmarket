import { useEffect, useState } from "react";
import api from "../services/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await api.get("/products");

      setProducts(response.data.products);
    } catch (err) {
      setError("Gagal mengambil data produk.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
}