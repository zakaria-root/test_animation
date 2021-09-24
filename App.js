
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TranslateCircel from './commponent/translateCircel';

export default function App() {
  

  return (
    <View style={styles.container}>
      <TranslateCircel />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
