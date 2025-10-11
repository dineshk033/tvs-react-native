import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Pressable,
  Text,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Login() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    if (!email || !password) {
      Alert.alert("invalid email/password");
      return false;
    }
    return true;
  };
  const handleLogin = () => {
    if (validateLogin()) {
      login(email, password);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600 justify-center px-6">
        <View className="bg-white rounded-3xl p-8 shadow-2xl">
          <Text className="text-3xl font-bold text-gray-800 text-center mb-2">
            Welcome Back
          </Text>
          <Text className="text-gray-500 text-center mb-8">
            Sign in to continue to your blog
          </Text>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2">Email</Text>
            <TextInput
              className="bg-gray-100 rounded-xl px-4 py-3 text-gray-800"
              placeholder="your.email@example.com"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View className="mb-6">
            <Text className="text-gray-700 font-semibold mb-2">Password</Text>
            <TextInput
              className="bg-gray-100 rounded-xl px-4 py-3 text-gray-800"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Pressable
            onPress={handleLogin}
            disabled={isLoading}
            className="bg-blue-500 rounded-xl py-4 items-center shadow-lg active:bg-blue-600"
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-bold text-lg">Sign In</Text>
            )}
          </Pressable>

          <Text className="text-gray-500 text-center mt-6">
            Demo: Use any email and password
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
