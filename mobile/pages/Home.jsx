
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const App = () => {
  const [markers, setMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMarkers = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/client/scooters"
      );
      const text = await response.text();
      const data = JSON.parse(text);
      setMarkers(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMarkers();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.2930773,
          longitude: -9.2366928,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
       
              <Marker
                // key={index}
                coordinate={{
                  latitude:32.2930773,
                  longitude:-9.2366928,
                }}
                title="Ayoub"
                description="scooter 2"
                pinColor="#F9F9F9"
              />

<Marker
                // key={index}
                coordinate={{
                  latitude:32.2930773,
                  longitude:-9.2066928,
                }}
                title="merwan"
                description="scooter 3"
                pinColor="#F9F9F9"
              />
          
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default App;


















