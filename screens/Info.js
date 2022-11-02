import { Text, View, StyleSheet, Image } from 'react-native'
import * as ImagePicker from "expo-image-picker";
import { Modal, Portal, Button, Provider } from "react-native-paper"
import { useState } from 'react'
const Info = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [imageInfo, setImageInfo] = useState({})

  const selectImageFromGallery = async () => {
    //ask for permission to access library

    if (photo == true) {
      uploadImage()
    }
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted == true) {
      let res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.6,
      });

      if (!res.cancelled) {
        let imageInfo = {
          uri: res.uri,
          type: `test/${res.uri.split(".")[1]}`,
          name: `test.${res.uri.split(".")[1]}`,
        };
        setImageInfo(imageInfo);
        setModal(false);
        setPhoto(true)
      }
    } else {
      Alert.alert("Gallery Permission Required!");
    }
  };

  //function for using camera
  const selectImageFromCamera = async () => {
    //ask for permission to access library
    if (photo == true) {
      uploadImage()
    }

    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (permission.granted == true) {
      let res = await ImagePicker.launchCameraAsync();
      if (!res.cancelled) {
        let imageInfo = {
          uri: res.uri,
          type: `test/${res.uri.split(".")[1]}`,
          name: `test.${res.uri.split(".")[1]}`,
        };
        setImageInfo(imageInfo);
        setModal(false);
        setPhoto(true)
      }
    } else {
      Alert.alert("Camera Permission Required!");
    }
  };

  //function for handling image uploads to cloudinary
  const uploadImage = () => {
    // const data = new FormData();
    // data.append("file", image);
    // fetch("model_api_link", {
    //   method: "post",
    //   body: data,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPhoto(data.url);
    //   })
    //   .catch((err) => {
    //     Alert.alert("Error While Uploading Image!");
    //   });
    //

    console.log(imageInfo)
    navigation.navigate("Home")
  };
  return (
    <View style={styles.root} >
      <Image uri={imageInfo.uri} />
      <Button
        icon={photo == false ? "upload" : "check"}
        mode="contained"
        theme={{ colors: { primary: "teal" } }}
        onPress={() => {
          photo == false ? setModal(true) : uploadImage();
        }}
        style={{
          marginTop: "70%",
          marginLeft: "20%",
          width: '60%',
          height: "10%",
          justifyContent: "center",
          alignItems: "center"

        }}
      >
        {photo == false ? "Click/Select Image" : "Upload Image"}
      </Button>
      <Button
        mode="contained"
        theme={{ colors: { primary: "teal" } }}
        onPress={() => {
          if (photo == true) {
            setPhoto(false)
            setModal(true)
          } else {
            navigation.navigate("Home")
          }
        }}
        style={{
          marginTop: "5%",
          marginLeft: "20%",
          width: '60%',
          height: "10%",
          justifyContent: "center",
          alignItems: "center"

        }}

      >
        {photo == false ? "Go Back" : "Re-Select Image"}
      </Button>
      <Provider>
        <Portal>
          <Modal
            visible={modal}
            onDismiss={() => {
              setModal(false);
            }}
            contentContainerStyle={styles.ModalStyle}
          >
            <View>
              <View style={styles.modalButton}>
                <Button
                  icon="camera"
                  mode="contained"
                  style={{ marginRight: 5 }}
                  theme={{ colors: { primary: "teal" } }}
                  onPress={selectImageFromCamera}
                >
                  camera
                </Button>
                <Button
                  icon="image"
                  mode="contained"
                  style={{ marginRight: 3 }}
                  theme={{ colors: { primary: "teal" } }}
                  onPress={selectImageFromGallery}
                >
                  gallery
                </Button>
              </View>
              <Button
                icon="close"
                mode="contained"
                onPress={() => {
                  setModal(false);
                }}
                style={{ marginHorizontal: 20, marginVertical: 20 }}
              >
                Cancel
              </Button>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000000",
    color: "#fff",
    margin: 8,
    justifyContent: "center",
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 100,
  },
  ModalStyle: {
    backgroundColor: "azure",
    marginTop: 70,
    marginBottom: 100,
    marginLeft: 30,
    marginRight: 30,
  },
});




export default Info
