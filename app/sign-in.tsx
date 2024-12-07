import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { signIn } from "aws-amplify/auth";
import { Link, Redirect, router } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignInPressed = async () => {
    setError("");
    try {
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        password,
        options: {
          authFlowType: "USER_PASSWORD_AUTH",
        },
      });
      if (isSignedIn) {
        router.push("/");
      } else {
        setError("Something went wrong! " + nextStep.signInStep);
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ backgroundColor: "#faf9ff" }}>
        <View style={tw`h-2/6 px-4`}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("@/assets/images/login/login.jpg")}
          />
        </View>
        <KeyboardAvoidingView
          behavior="height"
          style={tw`h-3/5  items-center rounded-3xl mt-3 bg-white`}
        >
          <View style={tw`mt-4`}>
            <Text style={tw`text-xl text-center font-bold mb-1`}>Sign In</Text>
            <Text>Log in to app to get start with new orders</Text>
          </View>
          <View
            style={{
              width: "80%",
              paddingHorizontal: 20,
              // height: 20,
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
              onPress={onSignInPressed}
              style={[
                tw`w-full h-12 rounded-full px-4 mt-6 flex-row justify-center items-center`,
                { backgroundColor: "#1db7af" },
              ]}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Sign in
              </Text>
            </TouchableOpacity>

            {error && <Text style={{ color: "red" }}>{error}</Text>}
            <Link href={"/sign-up"} asChild>
              <TouchableOpacity style={{ marginTop: 10 }}>
                <Text style={{ textAlign: "center" }}>New here? Sign up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
