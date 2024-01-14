import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text,StyleSheet,View, TextInput, Button, TouchableOpacity} from "react-native";


export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.two}>Login</Text>
      <TextInput
      style={styles.user}
      placeholder="Username..."
      />
      <TextInput
      style={styles.password}
      placeholder="Password"
      />
      <TouchableOpacity style={styles.sign}>
        <Text style={styles.light}>Sign in</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingVertical: 230,
    backgroundColor: '#BCBBDD'
  },
  heading:{
    fontSize:30,
    paddingTop:10,
  },
  box:{
    flex:1,
    backgroundColor: '#ffffff',
    height:200,
    width: 250,
   alignItems: 'center',
   borderRadius:20,
   shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  user:{
    marginTop:30,
    backgroundColor: '#DEDEE8',
    color: '#000',
    width: 180,
    height: 45,
    borderRadius:30,
    paddingLeft:10
  },
  password:{
    backgroundColor: '#DEDEE8',
    color: '#000',
    width: 180,
    height: 45,
    borderRadius:30,
    paddingLeft:10,
    marginTop:20
  },
  two:{
    marginTop:20,
    fontSize:25
  },
  sign:{
    marginTop:30,
    backgroundColor:'#120EB1',
    width:80,
    alignItems:'center',
    height:40,
    borderRadius:10,
    
  },
  light:{
    color:'#ffffff',
    fontSize:18,
    marginTop:5,
    
  }
});