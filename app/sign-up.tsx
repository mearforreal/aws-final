import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
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
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: email,
        password,

        options: {
          userAttributes: { name },
          // autoSignIn: true,
        },
      });
      router.push("/confirm-signup");
      console.log(nextStep);
      if (isSignUpComplete) {
        router.push("/confirm-signup");
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ backgroundColor: "#faf9ff", flex: 1 }}>
        <KeyboardAvoidingView behavior="position">
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
          <View style={tw`h-2/5  items-center rounded-3xl mt-3 bg-white`}>
            <View style={tw`mt-4`}>
              <Text style={tw`text-xl text-center font-bold mb-1`}>
                Sign In
              </Text>
              <Text>Sign up to app to get start with new orders</Text>
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
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>

              {error && <Text style={{ color: "red" }}>{error}</Text>}
              <Link href={"/sign-in"} asChild>
                <TouchableOpacity style={{ marginTop: 10 }}>
                  <Text style={{ textAlign: "center" }}>
                    Already have account? Sign in
                  </Text>
                </TouchableOpacity>
              </Link>
              <Link href={"/confirm-signup"} asChild>
                <TouchableOpacity style={{ marginTop: 10 }}>
                  <Text style={{ textAlign: "center" }}>
                    Confirm your account
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
