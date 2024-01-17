import { StatusBar } from "expo-status-bar";
// import * as Font from 'expo-font';

import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

export default function App() {
  return (
    <ImageBackground style={styles.bg} source={require("./assets/bg2.jpg")}>
      <View style={styles.container}>
        <Text style={styles.heading}>LOGIN</Text>
        <View style={styles.box}>
          <Text style={styles.head}>Username</Text>

          <View style={styles.change}>
           
            <TextInput
              style={styles.inner}
              placeholder="Type your Username"
            ></TextInput>
             <Image source={require('./assets/user.png')} style={{height:15, width:15, position:'relative', left:'-510%'}}></Image>
          </View>

          <Text style={styles.head}>Password</Text>

          <View style={styles.change}>
            <TextInput style={styles.inner} placeholder="Password"></TextInput>
            <Image source={require('./assets/lock.png')} style={{height:20, width:15, position:'relative', left:'-510%'}}></Image>
          </View>
        </View>
        <View style={styles.forgot}>
          <Text style={styles.pass}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.sign}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.up}>Or Sign Up using</Text>
        <View style={styles.footer}>
         <Image source={require('./assets/search.png')} style={{height:20, width:15}}></Image>
         <Image source={require('./assets/facebook.png')} style={{height:20, width:15}}></Image>
         <Image source={require('./assets/twitter.png')} style={{height:20, width:15}}></Image>
        </View>
      </View>
    </ImageBackground>
  );
}




const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 550,
    backgroundColor: "#ffffff",
    width: 300,
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.84,
    elevation: 5,
    padding: 20,
   
    // fontFamily: 'Segoe UI'
  },
  heading: {
    fontSize: 28,
    fontWeight: "600",
    marginTop: 20,
  },
  box: {
    marginTop: 30,
    alignItems: "flex-start",
    width: 220,
  },
  head: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 5,
    fontWeight: "500",
  },
  inner: {
    backgroundColor: "#E3E3EC",
    color: "#967321",
    borderRadius: 20,
    height: 40,
    width:220,
    padding: 10,
    paddingLeft:50, 
    
  },
  login: {
    marginTop: 30,
    backgroundColor: "#0D47A1",
    width: 220,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
  },
  sign: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },
  forgot: {
    marginTop: 5,
    fontSize: 3,
    marginLeft: 90,
  },
  pass: {
    textDecorationLine: "underline",
  },
  up: {
    marginTop: 40,
    color: "#B3B3B3",
  },
  change: {
    flexDirection: "row",
    alignItems: 'center',
  },
  footer:{
    display:'flex',
    flexDirection:'row'
  }
});
