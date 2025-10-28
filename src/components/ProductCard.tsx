import { ProductModel } from "@/types/ProductModel";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "store/slice/cartSlice";

export default function ProductCard({ product }: { product: ProductModel }) {
  const dispatch = useDispatch();
  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  return (
    <View className="bg-white rounded-xl shadow-md p-4 mb-3">
      <Pressable onPress={() => router.push(`/(store)/product/${product.id}`)}>
        <Image
          source={{
            uri: product.thumbnail,
          }}
          className="size-full h-40 rounded-lg mb-3"
          resizeMode="cover"
        />
        <Text className="text-md font-semibold text-gray-900">
          {product.title}
        </Text>
      </Pressable>
      {/* Price */}
      <View className="flex-row items-center mt-2">
        <Text className="text-lg font-bold text-green-600">
          ${discountPrice.toFixed(2)}
        </Text>
        <Text className="ml-2 text-sm line-through text-gray-400">
          ${product.price.toFixed(2)}
        </Text>
      </View>
      {/* Buttons */}
      <View className="flex-row items-center mt-3 justify-between">
        {/**Cart */}
        <Pressable
          className="p-2 flex-row items-center gap-3 bg-blue-600 rounded-xl text-white"
          hitSlop={10}
          onPress={() => dispatch(addToCart(product))}
        >
          <Ionicons name="cart-outline" size={22} color="#fff" />
          <Text className="text-white font-medium text-sm ml-3">
            Add to Cart
          </Text>
        </Pressable>
        <Pressable className="p-2 relative" hitSlop={10} onPress={() => {}}>
          <Ionicons name="heart-outline" size={22} color=" black" />
        </Pressable>
      </View>
    </View>
  );
}
