import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Cart() {
  const router = useRouter();

  const handleDismissAll = () => {
    router.dismissAll();
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Cart</Text>
      <Button title="Go to first screen" onPress={handleDismissAll} />
    </View>
  );
}
