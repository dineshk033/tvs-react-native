// File: components/DropdownMultiSelect.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

type Props = {
  label: string;
  options: string[];
  selected: string[]; // array of selected option keys
  onChange: (next: string[]) => void;
  placeholder?: string;
  required?: boolean;
};

export default function DropdownMultiSelect({
  label,
  options,
  selected,
  onChange,
  placeholder = "Select...",
  required = false,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(selected ?? []);

  useEffect(() => {
    setTempSelected(selected ?? []);
  }, [selected]);

  const toggle = (item: string) => {
    setTempSelected((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]
    );
  };

  const apply = () => {
    onChange(tempSelected);
    setModalVisible(false);
  };

  const renderItem = ({ item }: { item: string }) => {
    const checked = tempSelected.includes(item);
    return (
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked }}
        onPress={() => toggle(item)}
        className="flex-row items-center justify-between px-3 py-3 border-b border-gray-100"
      >
        <Text>{item}</Text>
        <View
          className={`w-5 h-5 rounded-sm ${
            checked ? "bg-blue-600" : "border border-gray-300"
          }`}
        />
      </Pressable>
    );
  };

  const display =
    selected && selected.length > 0 ? selected.join(", ") : placeholder;

  return (
    <View className="mb-4">
      <Text className="mb-1 font-semibold text-gray-700">
        {label} {required ? "*" : ""}
      </Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={() => setModalVisible(true)}
        className="border border-gray-300 rounded-md px-3 py-3"
      >
        <Text numberOfLines={1}>{display}</Text>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <SafeAreaView className="flex-1 justify-end bg-black/30">
          <View className="bg-white p-4 rounded-t-lg max-h-3/4">
            <Text className="text-lg font-semibold mb-3">{label}</Text>

            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={renderItem}
              style={{ marginBottom: 12 }}
            />

            <View className="flex-row justify-end space-x-3">
              <TouchableOpacity
                onPress={() => {
                  setTempSelected(selected ?? []);
                  setModalVisible(false);
                }}
                className="px-4 py-2 rounded-md border border-gray-300"
              >
                <Text>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={apply}
                className="px-4 py-2 rounded-md bg-blue-600"
              >
                <Text className="text-white">Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
