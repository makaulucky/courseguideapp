import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,  } from 'react-native';

export default function App() {
  return (
    <View style= {{padding: 50}}> 
      <View style={{
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignContent:'center' 
      }}>
      <TextInput placeholder = "Semester Goals" style={{
        width:'90%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10  }} />
      <Button title='Add Text' />
    </View>
    </View>

  );
}
