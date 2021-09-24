import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
    Text,
    PanResponder
} from 'react-native';


export default function TranslateCircel() {

    const translate = useState(new Animated.ValueXY({x:0, y:0}))[0];
    
    const pan = PanResponder.create({
        onMoveShouldSetPanResponder:() => true,
        onPanResponderMove: Animated.event([
            null,
            {dx: translate.x, dy : translate.y}
        ]),
        onPanResponderRelease: () =>{
            Animated.spring(translate, {
                toValue: {x: 0 ,y :0},
                useNativeDriver: false
            }).start()
        }
    })
    const textHindler  = () => {
        Animated.timing(translate , {
            toValue : {x : 250, y : 0},
            duration : 400, 
            useNativeDriver : false
        }).start();
    
    }

    return (
    <View style={styles.container}>
        <Animated.View 
        {...pan.panHandlers}
        style={translate.getLayout()}
        >
        <View 
        style={styles.circel}
        />
        </Animated.View>
        <TouchableWithoutFeedback
        
        onPress={textHindler}
        >
            <Text 
            style={{ 
                padding: 15,
                borderRadius: 10,
                backgroundColor: 'gray',
                color : 'white',
                width: 100,
                margin: 10
            }} >
                press her !!
            </Text>
        </TouchableWithoutFeedback>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    circel:{
        width : 100, 
        height : 100,
        borderRadius : 100/2,
        backgroundColor : 'red',
        
    }

});
