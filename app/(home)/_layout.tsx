import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Redirect, router, Stack } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { getCurrentUser } from "aws-amplify/auth";

const HomeLayout = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  if (authStatus === "unauthenticated") {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
