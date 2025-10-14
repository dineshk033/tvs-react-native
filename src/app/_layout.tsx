import { Text, View } from "react-native";
import "../global.css";
import { Slot, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
