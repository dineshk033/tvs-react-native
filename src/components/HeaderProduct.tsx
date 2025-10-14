import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
export default function HeaderProduct() {
  return (
    <View className="flex-row items-center gap-2 px-3">
      <StatusBar style="dark" animated />
      {/* search Field */}
      <View className="flex-1 flex-row items-center rounded-xl bg-slate-50 border border-slate-200 px-2">
        <Ionicons
          name="search-outline"
          size={18}
          color="black"
          style={{ marginRight: 6 }}
        />
        <TextInput
          placeholder="search-product"
          placeholderClassName=" text-gray-500"
          className="flex-1 text-base text-gray-900 px-2 py-3"
          returnKeyType="search"
        />
      </View>
      {/**Favorite */}
      <Pressable
        className="p-2 relative"
        hitSlop={10}
        onPress={() => router.push("/favorite")}
      >
        <Ionicons name="heart-outline" size={22} color="#111827" />
      </Pressable>
      {/**Cart */}
      <Pressable
        className="p-2 relative"
        hitSlop={10}
        onPress={() => router.push("/cart")}
      >
        <Ionicons name="cart-outline" size={22} color="#111827" />
      </Pressable>
    </View>
  );
}
