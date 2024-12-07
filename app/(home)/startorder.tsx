import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import {Picker} from '@react-native-picker/picker';
import { Link } from "expo-router";


const StartOrderScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  function onPress(){
    console.log("Pressed");
    
  }

  return (
    <SafeAreaView>
    
     <Text>Choose meals calories</Text>

     <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="900" value="900" />
  <Picker.Item label="1200" value="1200" />
  <Picker.Item label="1500" value="1500" />
  <Picker.Item label="2000" value="2000" />
</Picker>


      <Pressable style={styles.button}>
        <Text style={styles.text}>Place Order</Text>
      </Pressable>
   
    </SafeAreaView>
  );
};



export default StartOrderScreen;

const styles = StyleSheet.create(
  {
  container: {
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
text: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
},
  })
