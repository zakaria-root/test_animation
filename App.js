import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import PostInput from './commponent/PostInput';
import WhatsappRecordAnimation from './commponent/whatsappRecordAnimation';
import WhatsappUserMention from './commponent/whatsappUserMention';
export default function App() {
  

  return (
    <View style={styles.container}>
      
      <WhatsappUserMention />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  

    
  },

});
