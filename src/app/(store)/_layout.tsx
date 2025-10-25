import CustomDrawer from "@/components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { Pressable } from "react-native";

export default function StoreLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // drawerType: "slide",
        // headerStyle: { backgroundColor: "#fff" },
        // overlayColor: "rgba(0,0,0,0.4)",
      }}
    >
      <Drawer.Screen name="index" options={{ title: "store" }} />
      <Drawer.Screen
        name="product/[id]"
        options={({ navigation }) => ({
          title: "product",
          headerLeft: () => (
            <Pressable
              className="ml-3"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={26} color="#333" />
            </Pressable>
          ),
        })}
      />
    </Drawer>
  );
}
