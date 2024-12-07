import { Button, Pressable, StyleSheet, Text, View, } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import {Picker} from '@react-native-picker/picker';
import { Link } from "expo-router";
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const StartOrderScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


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

<Text style={styles.paragraph}>{text}ss</Text>
 
<Link href={"/orderstatus"} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Place Order</Text>
      </Pressable>
      </Link>
 
      <View style={styles.container}>
        {location?.coords.altitude ? <MapView showsUserLocation style={styles.map}  initialRegion={{
    latitude: location?.coords.altitude,
    longitude: location?.coords.longitude,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  }} /> : null}
      
    </View>

    </SafeAreaView>
  );
};




//export default StartOrderScreen;

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

paragraph: {
  fontSize: 18,
  textAlign: 'center',
  
},
map: {
  width: '100%',
  height: 200,
},

  })



export default StartOrderScreen;

