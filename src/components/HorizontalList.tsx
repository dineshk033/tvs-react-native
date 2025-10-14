import React, { useMemo } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import ProductCard from "./ProductCard";
import { ProductModel } from "@/types/ProductModel";
const GAP = 12;
export default function HorizontalList({ items }: { items: ProductModel[] }) {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = useMemo(() => Math.round(width * 0.72), [width]);
  const SNAP = CARD_WIDTH * GAP;
  return (
    <FlatList
      data={items}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{ width: CARD_WIDTH, marginRight: GAP }}>
          <ProductCard product={item} />
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      //   snapToInterval={SNAP}
      //   decelerationRate="fast"
      snapToAlignment="start"
      initialNumToRender={4}
      windowSize={7}
      removeClippedSubviews
    />
  );
}
