import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { Text } from "react-native";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      className="bg-gray-100"
    >
      <Text className="text-xl font-bold text-gray-800">Custom Drawer</Text>
    </DrawerContentScrollView>
  );
}
