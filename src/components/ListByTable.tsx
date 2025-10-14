import { ProductModel } from "@/types/ProductModel";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function ListByTable({ product }: { product: ProductModel[] }) {
  const renderItem = ({ item }: { item: ProductModel }) => {
    return (
      <View className="bg-white rounded-xl shadow-md p-4 m-4 border border-gray-200">
        <Text className="text-xl font-bold text-gray-800 mb-2">
          {item.title}
        </Text>
        <Text className="text-sm text-gray-600 mb-4">{item.description}</Text>
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-semibold text-green-600">
            ₹{item.price}
          </Text>
          <Text className="text-sm text-gray-500">Stock: {item.stock}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-yellow-500 text-base mr-2">★ ★ ★ ★ ☆</Text>
          <Text className="text-gray-600 text-sm">({item.rating}/5)</Text>
        </View>
      </View>
    );
  };
  return (
    <View className="flex-1 bg-white">
      {/* to list in table */}
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text>No records found</Text>
          </View>
        }
      />
    </View>
  );
}
