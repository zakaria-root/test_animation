import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, View, Text } from 'react-native';

const WhatsappUserMention = () => {
    const ListItem = () => {
        return(
            <View style={styles.list}>
                <Text style={styles.name}>hajar khairi</Text>
                <Text style={styles.name}>zaid caidi</Text>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <ListItem />
            <View style={styles.input}>
            <TextInput 
            placeholder="Type Here !!"
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