import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { signIn } from "aws-amplify/auth";
import { Link, router } from "expo-router";
import { signUp } from "aws-amplify/auth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignUpPressed = async () => {
    setError("");
    try {
      await signUp({
        username: email,
        password,

        options: {
          userAttributes: { name },
          autoSignIn: true,
        },
      });
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#faf9ff" }}>
      <View style={tw`h-3/6 px-4`}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
          source={require("@/assets/images/login/login.jpg")}
        />
      </View>
      <View style={tw`h-2/5  items-center rounded-3xl mt-3 bg-white`}>
        <View style={tw`mt-4`}>
          <Text style={tw`text-xl text-center font-bold mb-1`}>Sign In</Text>
          <Text>Log in to app to get start with new orders</Text>
        </View>
        <View
          style={{
            width: "80%",
            paddingHorizontal: 20,
            height: 20,
          }}
        >
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            // onChangeText={(text) => {
            //   setLogin({ ...login, username: text });
            // }}
            // #faf9ff #1db7af
            style={[
              tw`w-full h-12 rounded-full px-4 mt-4`,
              { backgroundColor: "#f4f5f7" },
            ]}
          />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            // onChangeText={(text) => {
            //   setLogin({ ...login, username: text });
            // }}
            // #faf9ff #1db7af
            style={[
              tw`w-full h-12 rounded-full px-4 mt-4`,
              { backgroundColor: "#f4f5f7" },
            ]}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            // onChangeText={(text) => {
            //   setLogin({ ...login, password: text });
            // }}
            // #faf9ff #1db7af
            style={[
              tw`w-full h-12 rounded-full px-4 mt-4`,
              { backgroundColor: "#f4f5f7" },
            ]}
          />
          <TouchableOpacity
            onPress={onSignUpPressed}
            style={[
              tw`w-full h-12 rounded-full px-4 mt-6 flex-row justify-center items-center`,
              { backgroundColor: "#1db7af" },
            ]}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Sign in
            </Text>
          </TouchableOpacity>

          {error && <Text style={{ color: "red" }}>{error}</Text>}
          <Link href={"/sign-up"}>New here? Sign up</Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
