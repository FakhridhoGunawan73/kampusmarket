import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import DetailScreen from "../screens/DetailScreen";
import TabNavigator from "./TabNavigator";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      ) : (
        <>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}