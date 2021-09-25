
import React from 'react';
import { StyleSheet, View } from 'react-native';
import InstagramHeartBounsAnimation from './commponent/instagramHeartBounsAnimation';

export default function App() {
  

  return (
    <View style={styles.container}>
    <InstagramHeartBounsAnimation />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },

});
