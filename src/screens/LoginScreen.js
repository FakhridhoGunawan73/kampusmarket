import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth(); // ✅ HARUS DI SINI

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Validasi", "Email dan Password wajib diisi.");
      return;
    }

    login();
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        KampusMarket
      </Text>

      <Text variant="bodyMedium" style={styles.subtitle}>
        Marketplace Barang Bekas Mahasiswa
      </Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    marginBottom: 15,
  },

  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
});
