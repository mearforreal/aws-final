import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Link } from "expo-router";


const HomeScreen = () => {

  
  const { signOut } = useAuthenticator();

  function onPress(){
    console.log("Pressed");
    
  }

  return (
    <SafeAreaView>
    
    <Link href={"/startorder"} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Start Order</Text>
      </Pressable>
    </Link>
     
      <Button title="Sign out" onPress={() => signOut()} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({container: {
  flex: 1,
  padding: 24,
  backgroundColor: '#eaeaea',
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'black',
},
title: {
  marginTop: 16,
  paddingVertical: 8,
  borderWidth: 4,
  borderColor: '#20232a',
  borderRadius: 6,
  backgroundColor: '#61dafb',
  color: '#20232a',
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 'bold',
},
text: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
},
});
