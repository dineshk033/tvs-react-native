import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
export default function CartModal({ visible, onClose }) {
  const data = useSelector((state: RootState) => state.cart.items);
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      backdropOpacity={0.4}
      animationIn={"slideInUp"}
      animationOut={"slideInDown"}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View className="bg-white rounded-2xl min-h-[30%] max-h-[70%]">
        <Text className="text-3xl font-bold">CART</Text>
        <Text className="text-xl">
          {data.length ? data.length : "No "} items in carts
        </Text>
      </View>
    </Modal>
  );
}
