import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { TextInput, View, Text } from 'react-native';

const WhatsappUserMention = () => {

    
    const itemTranslatY = new Animated.Value(200);
    const ListItem = () => {
        return(
            <Animated.View style={[styles.list, {transform :[
                {translateY : itemTranslatY},
               
            ]}]}>
                <Text style={styles.name}>hajar khairi</Text>
                <Text style={styles.name}>zaid caidi</Text>
            </Animated.View>
        )
    }
    
    
    const TextChangHandler = (val) => {
        
        const lastChar = val.charAt(val.length -1)
            
        if(lastChar === '@'){
            
            Animated.spring(itemTranslatY, {
                toValue : 0
            }).start()
        }
    }
    
   
    return(
        <View style={styles.container}>
            <ListItem />
            <View style={styles.input}>
            <TextInput 
            placeholder="Type Here !!"
            onChangeText={TextChangHandler}
            />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end"
    },

    input:{
        height: 50,
        margin :15,
        padding : 10,
        borderWidth: 1,
        borderRadius : 20,
        borderColor : "gray",
        
    },
    name:{
        borderWidth : 1,
        margin: 5,
        padding: 8,
        borderRadius: 10,
        borderColor: 'gray',

    },
    list:{
        alignItems: 'flex-start',
        paddingHorizontal: 10,

    }
})

export default WhatsappUserMention;