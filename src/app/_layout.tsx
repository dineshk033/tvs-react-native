import { Text, View } from "react-native";
import "../global.css";
import { Slot, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack initialRouteName="(store)">
        <Stack.Screen
          name="(store)"
          options={{ headerShown: false }}
          // options={{
          //   headerShown: true,
          //   headerBackground: () => (
          //     <View className="flex-1 bg-blue-500"></View>
          //   ),
          // }}
        />
        <Stack.Screen name="cart" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/register" />
      </Stack>
    </SafeAreaProvider>
  );
}
