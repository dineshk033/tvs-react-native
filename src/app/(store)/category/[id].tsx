import ListByTable from "@/components/ListByTable";
import { MOCKPRODUCTS } from "@/lib/MockProducts";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import LoadingSpinner from "@/components/Spinner";
export default function CategoryID() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response: any = await axios.get(
        `https://dummyjson.com/products/category/${id}`
      );
      setData(response.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchData();
    }, 6000);
    return () => clearTimeout(timer);
  }, [id]);

  //   loading
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <View className="flex-1 bg-white px-3">
      <Stack.Screen
        options={{
          title: `Category: ${id}`,
        }}
      />
      <Text className="my-4">Category/{id}</Text>
      <ListByTable product={data} />
    </View>
  );
}
