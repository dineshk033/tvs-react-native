import CartModal from "@/components/CartModal";
import TopCategory from "@/components/CategoryList";
import Footer from "@/components/Footer";
import HeaderProduct from "@/components/HeaderProduct";
import HorizontalList from "@/components/HorizontalList";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { MOCKPRODUCTS } from "@/lib/MockProducts";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeProduct() {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <HeaderProduct />
      <Pressable
        className="p-2 relative"
        hitSlop={10}
        onPress={() => setShowModal(true)}
      >
        <Ionicons name="cart-outline" size={22} color="#111827" />
      </Pressable>
      <CartModal visible={showModal} onClose={() => setShowModal(false)} />
      <ScrollView>
        <SectionHeader
          title="Category"
          subtitle="More Category"
          href="/(store)/category"
        />
        <TopCategory />
        <SectionHeader
          title="Flash Sale"
          subtitle="See More"
          href="/(store)/category"
        />
        <HorizontalList items={MOCKPRODUCTS} />
        <SectionHeader
          title="Trending Product"
          subtitle="See More"
          href="/(store)/category"
        />
        <HorizontalList items={MOCKPRODUCTS} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
