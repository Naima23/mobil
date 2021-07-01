import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function HomeScreen() {
  const [data, setData] = useState('');
  const [datDepart, setDatDepart] = useState('01-01-2021');
  const [datFin, setDatFin] = useState('01-01-2021');
 
  const sendData = async () => {
    fetch('http://172.16.11.172:3000/date/planing', { 
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalRDV: parseInt(data, 10),
        dateDepart: datDepart,
        dateFin: datFin,
      }),
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.myform}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setData}
            value={data}
            placeholder="total RDV"
            keyboardType="numeric"
          />
          <DatePicker
            style={styles.datePickerStyle}
            date={datDepart}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: 'none',
              },
            }}
            onDateChange={dateDepart => setDatDepart(dateDepart)}
          />
          <DatePicker
            style={styles.datePickerStyle2}
            date={datFin} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: 'none',
              },

            }}
            onDateChange={dateFin => setDatFin(dateFin)}
          />
          <Button
            // onPress={sendData}
            title="send"
            color="#B4A0D5"
            style={styles.btn}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  btn: {
    width: 300,

    marginTop: 50,

  },
  input: {
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#9381C1',
    borderBottomWidth: 1,
    width: 300,
  },
  datePickerStyle: {
    width: 300,
    marginTop: 20,

    borderBottomColor: '#9381C1',
    borderBottomWidth: 3,


  },
  datePickerStyle2: {
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: '#9381C1',
    borderBottomWidth: 3,



  },
});
