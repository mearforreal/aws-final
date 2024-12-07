import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Picker } from "@react-native-picker/picker";
import { Link, router, useLocalSearchParams } from "expo-router";
import * as Location from "expo-location";
import { getCurrentUser } from "aws-amplify/auth";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { createOrder } from "@/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";

const StartOrderScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const [calories, setCalories] = useState("1200");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const client = generateClient();
  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  const onSubmit = async () => {
    // submit to service
    // const userInfo = await Auth.currentAuthenticatedUser();
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(await getCurrentUser());

    const date = new Date();
    const input = {
      createdAt: date.toISOString(),
      destLatitude: location?.coords.altitude,
      destLongitude: location?.coords.longitude,
      status: "NEW",
      userId: userId,
      carId: "0",
      calories,
    };
    try {
      // const response = await API.graphql(
      //   graphqlOperation(createOrder, {
      //     input: input,
      //   })
      // );

      const result = await client.graphql({
        query: createOrder,
        authMode: "apiKey",

        // authToken:'',
        variables: {
          // @ts-ignore
          input: input,
        },
      });

      console.log(result);

      router.push({
        pathname: "/orderstatus",
        params: { id: result.data?.createOrder.id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 25,
          paddingHorizontal: 30,
          paddingTop: 25,
          fontWeight: 600,
        }}
      >
        Choose meals calories
      </Text>

      <Picker
        selectedValue={calories}
        onValueChange={(itemValue, itemIndex) => setCalories(itemValue)}
      >
        <Picker.Item label="900" value="900" />
        <Picker.Item label="1200" value="1200" />
        <Picker.Item label="1500" value="1500" />
        <Picker.Item label="1800" value="1800" />
        <Picker.Item label="2000" value="2000" />
      </Picker>

      <View>
        {location?.coords.altitude ? (
          <MapView
            // provider={PROVIDER_GOOGLE}
            // @ts-ignore
            animateToRegion={{
              latitude: location?.coords.latitude,
              longitude: location?.coords.longitude,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0121,
            }}
            showsUserLocation
            style={styles.map}
            initialRegion={{
              latitude: location?.coords.latitude,
              longitude: location?.coords.longitude,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0121,
            }}
          />
        ) : null}
      </View>

      {/* <Link href={"/orderstatus"} asChild> */}
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>Place Order</Text>
      </Pressable>
      {/* </Link> */}
    </SafeAreaView>
  );
};

//export default StartOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  map: {
    width: "100%",
    height: 200,
  },
});

export default StartOrderScreen;
