import { useAuth } from "@/context/AuthContext";
import { Link, Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated === false) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <View className="flex-1">
      <Text>Index</Text>
      <Link href="/blog" className="my-3">
        Blogger
      </Link>
    </View>
  );
}
