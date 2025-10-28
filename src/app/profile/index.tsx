import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SingleSelect from "@/components/SingleSelect";
import DropdownMultiSelect from "@/components/MultiSelect";
type Gender = "Male" | "Female" | "other" | "";
const STORAGEKEY = "profile_v1";
export default function Profile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState<Gender>("");
  const [maritalStatus, setMaritalStatus] = useState<"Single" | "Married" | "">(
    ""
  );
  const [interests, setInterests] = useState({
    Sports: false,
    Music: false,
    Travel: false,
  });
  const [dob, setDob] = useState<Date | null>(null);
  const [showDOBPicker, setShowDOBPicker] = useState(false);
  const [bio, setBio] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    (async () => {
      await requestImagePermission();
      await loadProfile();
    })();
  }, []);

  async function loadProfile() {
    try {
      const raw = await AsyncStorage.getItem(STORAGEKEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setFullName(parsed.fullName ?? "");
      setEmail(parsed.email ?? "");
      setPhone(parsed.phone ?? "");
      setGender(parsed.gender ?? "");
      setMaritalStatus(parsed.maritalStatus ?? "");
      setInterests(
        parsed.interests ?? {
          Sports: false,
          Music: false,
          Travel: false,
          Reading: false,
        }
      );
      setDob(parsed.dob ? new Date(parsed.dob) : null);
      setBio(parsed.bio ?? "");
      setImageUri(parsed.imageUri ?? null);
    } catch (e) {
      console.warn("load error", e);
    }
  }
  async function requestImagePermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "please grant permission");
    }
  }
  function formatDateToDDMMYYYY(date) {
    if (!(date instanceof Date)) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const toggleInterest = (key) => {
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const onChangeDOB = (_event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDob(selectedDate);
    }
    setShowDOBPicker(false);
  };

  const pickImageFromGallery = async () => {
    // Implement camera functionality here
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        const uri = result.assets?.[0]?.uri ?? (result as any).uri;
        setImageUri(uri);
      }
    } catch (err) {
      console.log("camera", err);
    }
  };

  const takePhoto = async () => {
    // Implement camera functionality here
    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        const uri = result.assets?.[0]?.uri ?? (result as any).uri;
        setImageUri(uri);
      }
    } catch (err) {
      console.log("camera", err);
    }
  };
  const saveProfile = async () => {
    const payload = {
      fullName,
      email,
      phone,
      gender,
      maritalStatus,
      interests,
      dob: dob?.toISOString() ?? null,
      bio,
      imageUri,
    };

    try {
      await AsyncStorage.setItem(STORAGEKEY, JSON.stringify(payload));
      Alert.alert("Success", "Profile saved locally.");
    } catch (err) {
      console.warn("save error", err);
      Alert.alert("Error", "Unable to save profile.");
    }
  };
  return (
    <ScrollView
      className="flex-1 bg-white p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* <Text>Profile</Text> */}
      <Stack.Screen
        options={{
          title: `Profile`,
        }}
      />

      {/* Profile Image */}
      <View className="items-center mb-6">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="w-32 h-32 rounded-full items-center justify-center bg-gray-200 overflow-hidden"
        >
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={{ width: 128, height: 128, borderRadius: 64 }}
            />
          ) : (
            <Text className="text-gray-500">Tap to add photo</Text>
          )}
          {/* Replace with image preview logic */}
        </TouchableOpacity>
      </View>

      {/* Full Name */}
      <View className="mb-4">
        <Text className="mb-1 font-semibold">Full Name</Text>
        <TextInput
          accessibilityLabel="Full name"
          placeholder="Your full name"
          className="border border-gray-300 rounded-md px-3 py-2"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <SingleSelect />
      <DropdownMultiSelect
        label={"Drop dwon"}
        selected={[]}
        onChange={() => {}}
        options={["react", "Anfular", "view js"]}
      />

      {/* Email */}
      <View className="mb-4">
        <Text className="mb-1 font-semibold">Email</Text>
        <TextInput
          accessibilityLabel="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="you@example.com"
          className="border border-gray-300 rounded-md px-3 py-2"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Phone Number */}
      <View className="mb-4">
        <Text className="mb-1 font-semibold">Phone Number</Text>
        <TextInput
          accessibilityLabel="Phone number"
          keyboardType="phone-pad"
          placeholder="1234567890"
          className="border border-gray-300 rounded-md px-3 py-2"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      {/* Gender Select */}
      <View className="mb-4">
        <Text className="mb-1 font-semibold">Gender</Text>
        <View className="flex-row space-x-3">
          {/* Replace with dynamic gender options */}
          {(["Male", "Female", "Other"] as Gender[]).map((el) => (
            <Pressable
              key={el}
              onPress={() => setGender(el)}
              className={`${
                gender === el ? "border-blue-500" : "border-gray-300"
              } px-3 py-2 rounded-md border  me-3 `}
            >
              <Text>{el}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Marital Status Radio */}
      <View className="mb-4">
        <Text className="mb-1 font-semibold">Marital Status</Text>
        <View className="flex-row space-x-4">
          {/* Replace with dynamic marital status options */}
          {["Single", "Married"].map((el: any) => (
            <Pressable
              key={el}
              className="flex-row items-center"
              onPress={() => setMaritalStatus(el)}
            >
              <View
                className={`w-4 h-4 rounded-full mr-2 border ${
                  maritalStatus === el
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-400"
                } `}
              />
              <Text className="mr-4">{el}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Interests Checkboxes */}
      <View className="mb-4">
        <Text className="mb-1 font-semibold">Interests</Text>
        <View className="flex-row flex-wrap">
          {/* Replace with dynamic interests */}
          {Object.keys(interests).map((item: any) => (
            <Pressable
              key={item}
              onPress={() => toggleInterest(item)}
              className={`px-3 py-2 mr-2 mb-2 rounded-md border ${
                interests[item] ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <Text>{item}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Date of Birth */}
      <View className="mb-4">
        <Text className="mb-1 font-semibold">Date of Birth</Text>
        <Pressable
          className="border border-gray-300 rounded-md px-3 py-3"
          onPress={() => setShowDOBPicker(true)}
        >
          <Text>
            {dob ? formatDateToDDMMYYYY(dob) : "Select date of birth"}
          </Text>
        </Pressable>
      </View>

      {/* Bio */}
      <View className="mb-6">
        <Text className="mb-1 font-semibold">About Me</Text>
        <TextInput
          value={bio}
          onChangeText={setBio}
          accessibilityLabel="About me"
          placeholder="Write a short bio"
          className="border border-gray-300 rounded-md px-3 py-2 h-28 text-base"
          multiline
        />
      </View>
      {showDOBPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dob ?? new Date(2000, 0, 1)}
          mode={"date"}
          //   is24Hour={true}
          display={"default"}
          onChange={onChangeDOB}
          maximumDate={new Date()}
        />
      )}

      {/* Save Button */}
      <View className="mb-8">
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => saveProfile()}
          accessibilityLabel="Save profile"
          className="bg-blue-600 rounded-md px-4 py-3 items-center"
        >
          <Text className="text-white font-semibold">Save Profile</Text>
        </TouchableOpacity>
      </View>
      {/* Image Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View className="flex-1 justify-end bg-black/30">
          <View className="bg-white p-4 rounded-t-lg">
            <Text className="text-lg font-semibold mb-4">
              Update Profile Photo
            </Text>
            <TouchableOpacity
              className="py-3"
              onPress={async () => {
                setModalVisible(false);
                await takePhoto();
              }}
            >
              <Text>📷 Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-3"
              onPress={async () => {
                setModalVisible(false);
                await pickImageFromGallery();
              }}
            >
              <Text>🖼️ Choose from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-3"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-red-600">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
