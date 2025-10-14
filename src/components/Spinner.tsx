import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

const LoadingSpinner = ({ message = "Loading...", color = "#4F46E5" }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size={"large"} color={color} />
      <Text className="mt-4 text-gray-700 text-base">{message}</Text>
    </View>
  );
};

export default LoadingSpinner;
