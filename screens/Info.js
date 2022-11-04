import React from "react";
import { Image, StyleSheet, Text, View, Linking, Platform, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
const Info = ({ route, navigation }) => {
  //we have received these params from the Home component as of now
  const { _id, name, photo, phone, salary, email, position } =
    route.params.item;
  const openDial = () => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };
  return (
    <View style={styles.root}>
      {/* <Text style={{color:"white"}}>profil</Text> */}
      <LinearGradient colors={["gray", "teal"]} style={{ height: "20%" }} />
      <View style={{ alignItems: "center", marginTop: -40 }}>
        <Image
          style={{ width: 120, height: 120, borderRadius: 60 }}
          source={{
            uri: `${photo}`,
          }}
        />
        <Title style={{ color: "white", fontSize: 20 }}>{name}</Title>
        <Text style={{ color: "white", fontSize: 18 }}>{position}</Text>
      </View>
      <Card
        style={styles.profileCard}
        onPress={() => {
          Linking.openURL(`mailto:${email}`);
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={28} color="white" />
          <Text style={styles.profileInfo}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.profileCard} onPress={openDial}>
        <View style={styles.cardContent}>
          <MaterialIcons name="phone-android" size={28} color="white" />
          <Text style={styles.profileInfo}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.profileCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="money" size={28} color="white" />
          <Text style={styles.profileInfo}>{salary}</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <Button
          onPress={() => {
            navigation.navigate("Create", { item: route.params.item })
          }}
          icon="account-edit"
          mode="contained"
          theme={{ colors: { primary: "teal" } }}
        >
          Edit info
        </Button>
        <Button
          onPress={deleteEmployeeInfo}
          icon="delete"
          mode="contained"
          theme={{ colors: { primary: "teal" } }}
        >
          Delete Info
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  profileCard: {
    color: "white",
    marginTop: 30,
    marginLeft: 0,
    marginRight: 10,
    marginBottom: -10,
    width: "100%",
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    backgroundColor: "#2f333e",
    padding: 8,
  },
  profileInfo: {
    color: "white",
    fontSize: 18,
    marginLeft: 3,
  },
});

export default Info 
