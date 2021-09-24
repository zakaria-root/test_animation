
import React from 'react';
import {Animated, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { red } from 'color-name';


export default function WhatsappRecordEntireAnimation() {

  const circelAnimation = new Animated.Value(0);
  const micScale = new Animated.Value(1);
  const recordingTranslateY = new Animated.Value(250);


  // loop of animation red  circle 
  Animated.loop(
    Animated.sequence([
      Animated.timing(circelAnimation, { toValue: 1, duration: 800, useNativeDriver : false }),
      Animated.timing(circelAnimation, { toValue: 0, duration: 800, useNativeDriver : false })
    ])
  ).start();

  const RenderOkIcon = () => {
    return(
      <MaterialIcons name="check-circle" size={35} color="green" />
    )
  }
  const RenderRedCyrcel = () => {

    const interpolatCircel = circelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,0,0)", "rgb(255,255,255)"],
    })

    return(
      <Animated.View
      style={[styles.cyrcle, {backgroundColor : interpolatCircel, borderColor: interpolatCircel}]}
      />
    )
  }
  const RenderConcelIcon = () => {
    return(
      <MaterialIcons name="cancel" size={35} color="red" />
    )
  }


  const RenderRecording = () => {

    return(
    <Animated.View style={[styles.recording, {transform : [
      {translateY : recordingTranslateY}
    ]}]}>
      <RenderOkIcon />
      <RenderRedCyrcel/>
      <RenderConcelIcon />
    </Animated.View>
    )
  }
  const RenderInput = () => {
    return(
      <View style={styles.input}>
      <TextInput 
      placeholder="Type Here !!"
      
      />
    </View>
    )
  }

  const micHindler = () => {
    Animated.sequence([
      Animated.spring(micScale , { toValue: 2, useNativeDriver: false }),
      Animated.spring(micScale , { toValue: 1, useNativeDriver: false })
    ]).start(() => {
      Animated.spring(recordingTranslateY , { toValue: 0 , useNativeDriver: false}).start()
    });
  }

  const RenderIcon = () => {
    return(
      <Animated.View style={{ transform:[{ scale : micScale }] }}>
        <MaterialIcons 
        name="mic" 
        size={35} 
        color="gray" 
        onPress={micHindler}
        />
      </Animated.View>
      
    )
  }

  const RenderWraper = () => {
    return(
      <View style={styles.inputWraper}>
        <RenderInput />
        <View style={styles.icon}>

        <RenderIcon />
        </View>
      </View>
    )
  }

  
  return (
    <View style={styles.container}>
      <RenderRecording />
      <RenderWraper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'flex-end',
    
  },
  input:{
    flex:1,
    height: 50,
    margin :5,
    padding : 10,
    borderWidth: 1,
    borderRadius : 20,
    borderColor : "gray",
    
  },
  inputWraper:{
    flexDirection :'row',
    justifyContent : 'space-around',
    // backgroundColor: 'red'
  },
  icon:{
    // paddingTop: 15,
    justifyContent: 'center'
  },
  recording:{
    height: 180,
    alignItems: 'flex-end',
    marginRight: 5
    
  },
  cyrcle:{
    width: 33,
    height: 33,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 25,
    backgroundColor: 'red',
    marginRight:2
  }
});
