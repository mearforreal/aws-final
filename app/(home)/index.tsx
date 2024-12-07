import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const HomeScreen = () => {
  const { signOut } = useAuthenticator();
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
