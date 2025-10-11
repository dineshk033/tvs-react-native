import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function BlogID() {
  return (
    <View className="flex-1">
      <Text>Blog Dynamci segment</Text>
      <Text className="mt-1 text-lg">Blog Dynamci segment</Text>
      <Link href="/blog/1" className="my-2">
        Blog 1
      </Link>
      <Link href="/blog/2" className="my-2">
        Blog 2
      </Link>
      <Link href="/blog/3" className="my-2">
        Blog 3
      </Link>
      <Link href="/blog/4" className="my-2">
        Blog 4
      </Link>
    </View>
  );
}
