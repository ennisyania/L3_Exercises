import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button, Alert, StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox =({label, onChangeText})=>{
    return(
        <View>
            <Text>
                {label}
            </Text>
            <TextInput
                style={{borderWidth: 1}} onChangeText={onChangeText}
                />
        </View>
    );
};
// custom component to quickly make input boxes

const MyApp = () => {
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');



    return (
      <View style={{ padding: 20, paddingTop: 50}}>
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setType(value)}
              items={[
                  {label: 'Admin', value: 'Admin'},
                  {label: 'Guest', value: 'Guest'},
              ]}
          />
          <InputBox label={"User Name:"} onChangeText={(text) => setName(text)} />
          <InputBox label={"Password:"} onChangeText={(text) => setPw(text)} />



          {/*<Button*/}
          {/*    title={"LOG IN"}*/}
          {/*    onPress={()=>{Alert.alert("Another Thing!")}}*/}
          {/*/>*/}
          <TouchableOpacity
              onPress={() => {
                  ToastAndroid.show("Welcome " + type+" " + name, ToastAndroid.SHORT);
              }}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
      </View>
  );
};

export default MyApp;


