import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import PostInput from './commponent/PostInput';
import WhatsappRecordAnimation from './commponent/whatsappRecordAnimation';

export default function App() {
  

  return (
    <View style={styles.container}>
      <WhatsappRecordAnimation />
      <WhatsappRecordAnimation />
      <WhatsappRecordAnimation />
      <WhatsappRecordAnimation />
      <WhatsappRecordAnimation />
      <WhatsappRecordAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems : 'center',
    

    
  },

});
