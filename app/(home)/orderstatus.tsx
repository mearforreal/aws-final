import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Redirect, router, Stack, useLocalSearchParams } from "expo-router";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { getCurrentUser } from "aws-amplify/auth";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Car, Order } from "@/src/API";
import { getCar, getOrder } from "@/src/graphql/queries";
import { generateClient } from "aws-amplify/api";
import { onCarUpdated, onOrderUpdated } from "@/src/graphql/subscriptions";

const orderstatus = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [car, setCar] = useState<Car | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const client = generateClient();
  // const route = useRoute();
  const { id } = useLocalSearchParams();

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

  const mapRef = useRef(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // const orderData = await API.graphql(
        //   graphqlOperation(getOrder, { id: route.params.id })
        // );
        const orderData = await client.graphql({
          query: getOrder,
          authMode: "apiKey",

          // authToken:'',
          //@ts-ignore
          variables: { id: id },
        });
        console.log(orderData);
        // @ts-ignore
        setOrder(orderData.data?.getOrder);
      } catch (e) {}
    };
    fetchOrder();
  }, []);

  // Fetch Car data when order is updated
  useEffect(() => {
    if (!order?.carId || order.carId === "0") {
      return;
    }

    const fetchCar = async () => {
      try {
        const carData = await client.graphql({
          query: getCar,
          authMode: "apiKey",

          // authToken:'',
          variables: {
            // @ts-ignore
            id: order.carId,
          },
        });

        console.log(carData);

        //@ts-ignore
        setCar(carData.data.getCar);
      } catch (e) {}
    };
    fetchCar();
  }, [order]);

  useEffect(() => {
    // const subscription = API.graphql(
    //   graphqlOperation(onOrderUpdated, { id: route.params.id })
    // ).subscribe({
    //   next: ({ value }) => setOrder(value.data.onOrderUpdated),
    //   error: (error) => console.warn(error),
    // });

    //@ts-ignore
    const updateSub = client
      .graphql({ query: onOrderUpdated, variables: { id: id } })
      .subscribe({
        next: ({ data }) => setOrder(data.onOrderUpdated),
        error: (error) => console.warn(error),
      });

    // return () => updateSub.unsubscribe();
  }, []);

  // Fetch order on initial render

  useEffect(() => {
    //Zoom and fit marker

    setTimeout(function () {
      // @ts-ignore
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }, 800);
  }, []);

  // Subscribe to car updates
  useEffect(() => {
    if (!order?.carId || order.carId === "1") {
      return;
    }

    const updateSub = client
      .graphql({ query: onCarUpdated, variables: { id: order.carId } })
      .subscribe({
        // @ts-ignore
        next: ({ data }) => setCar(data.onCarUpdated),
        error: (error) => console.warn(error, "ll"),
      });

    return () => updateSub.unsubscribe();
  }, [order]);

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
        Order Status Page
      </Text>

      {/* <View style={{ height: Dimensions.get("window").height - 150 }}>
       
      </View> */}
      {location?.coords ? (
        <MapView
          ref={mapRef}
          showsUserLocation
          style={styles.map}
          // @ts-ignore
          animateToRegion={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
          // @ts-ignore
          initialRegion={{
            // @ts-ignore
            latitude: location?.coords.latitude,
            // @ts-ignore
            longitude: location?.coords.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
        />
      ) : null}

      <View style={{ marginTop: 10, marginLeft: 10 }}>
        <Text>Order latitude: {location?.coords.latitude}</Text>
        <Text>Order status: {order?.status}</Text>
        <Text>Order driver Name: {car?.user?.name}</Text>
        <Text>Order driver Email: {car?.user?.email}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: 200,
  },
});

export default orderstatus;
