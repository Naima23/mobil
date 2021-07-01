import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.Text}>Form</Text> */}
      <TextInput style={styles.textinput} placeholder='Name' underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder='Prenom' underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder='Cin' underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder='Dat nesans' underlineColorAndroid={'transparent'} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Envoyer </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },

  Text: {
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    width: 200,
  },

  textinput: {
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#9381C1',
    borderBottomWidth: 1,
    width: 200,
  },
  button: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#B4A0D5",
    alignItems: 'center',
  },

});
