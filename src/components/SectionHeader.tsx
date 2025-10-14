import { SectionHeaderModel } from "@/types/SectionHeaderModel";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function SectionHeader({
  title,
  href,
  subtitle,
}: SectionHeaderModel) {
  return (
    <View className="flex-row justify-between items-center px-3 py-3 mt-3">
      <Text className="text-xl font-semibold text-gray-900">{title}</Text>
      {subtitle && (
        <Pressable
          onPress={() => {
            router.push(href);
          }}
        >
          <Text className="text-md text-blue-600 font-semibold">
            {subtitle}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
