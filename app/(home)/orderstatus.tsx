import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router, Stack } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { getCurrentUser } from "aws-amplify/auth";
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const orderstatus = () => {
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
    <Text>Order Status Page</Text>

    <View style={styles.container}>
    <MapView showsUserLocation style={styles.map}  /> 
      
</View>
    
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: 200,
      },

});

export default orderstatus;
