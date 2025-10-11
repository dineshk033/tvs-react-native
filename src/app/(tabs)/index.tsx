import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function TabsIndex() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>TabsIndex Screen</Text>
      <Link href="/blog">Blogger</Link>
    </View>
  );
}
