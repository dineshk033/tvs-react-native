import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Cart() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const handleDismissAll = () => {
    router.dismissAll();
  };
  return (
    <ProtectedRoute user={isAuthenticated}>
      <View className="flex-1 items-center justify-center">
        <Text>Cart</Text>
        <Button title="Go to first screen" onPress={handleDismissAll} />
      </View>
    </ProtectedRoute>
  );
}
