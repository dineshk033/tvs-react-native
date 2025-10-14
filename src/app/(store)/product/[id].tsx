import axios from "axios";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function ProductID() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response: any = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setData(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  const title = data?.title || "Loading";
  return (
    <View className="flex-1 ">
      <Text className="mb-5">ProductID</Text>
      <Stack.Screen
        options={{
          title: title,
        }}
      />
      <Link href="/cart">Cart page</Link>
    </View>
  );
}
