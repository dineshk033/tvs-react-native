import { Text, View } from "react-native";
import "../global.css";
import { Slot, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaProvider>
        <AuthProvider>
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
            <Stack.Screen
              name="(auth)/login"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(auth)/register" />
          </Stack>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
