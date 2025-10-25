import { useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function ProtectedRoute({ user, children }) {
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login");
    }
  }, [user]);
  if (user === null) return null;

  return <>{children}</>;
}
