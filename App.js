
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WhatsappRecordEntireAnimation from './commponent/WhatsappRecordEntireANimation';


export default function App() {
  

  return (
    <View style={styles.container}>
      
      <WhatsappRecordEntireAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
