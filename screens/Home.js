import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'


import React from 'react'

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Button
          icon="arrow-right-drop-circle"
          theme={{ colors: { primary: "teal" } }}
          mode="contained"
          onPress={() => navigation.navigate('Info')}
          style={styles.buttonStyle}
        >
          Start Scanning

        </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    color: "white"
  },
  buttonStyle: {
    marginTop: "70%",
    marginLeft: "20%",
    width: '60%',
    height: "15%",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Home
