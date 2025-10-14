import TopCategory from "@/components/CategoryList";
import Footer from "@/components/Footer";
import HeaderProduct from "@/components/HeaderProduct";
import HorizontalList from "@/components/HorizontalList";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { MOCKPRODUCTS } from "@/lib/MockProducts";
import { Link, router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeProduct() {
  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <HeaderProduct />
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
