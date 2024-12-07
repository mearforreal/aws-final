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
import { confirmSignUp, signIn } from "aws-amplify/auth";
import { Link, Redirect, router, useLocalSearchParams } from "expo-router";

const ConfirmSignUpScreen = () => {
  const [code, setcode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { username } = useLocalSearchParams();
  const onConfimrPressed = async () => {
    setError("");
    try {
      //   const usernameParam: any = username;

      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: email,
        confirmationCode: code,
      });
      if (isSignUpComplete) {
        router.push("/");
      } else {
        setError("Something went wrong! " + nextStep.signUpStep);
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
            <Text style={tw`text-xl text-center font-bold mb-1`}>
              Confirmation
            </Text>
            <Text>Confirm your email</Text>
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
              placeholder="Code"
              value={code}
              onChangeText={setcode}
              // onChangeText={(text) => {
              //   setLogin({ ...login, username: text });
              // }}
              // #faf9ff #1db7af
              style={[
                tw`w-full h-12 rounded-full px-4 mt-4`,
                { backgroundColor: "#f4f5f7" },
              ]}
            />

            <TouchableOpacity
              onPress={onConfimrPressed}
              style={[
                tw`w-full h-12 rounded-full px-4 mt-6 flex-row justify-center items-center`,
                { backgroundColor: "#1db7af" },
              ]}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Verify
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

export default ConfirmSignUpScreen;

const styles = StyleSheet.create({});
