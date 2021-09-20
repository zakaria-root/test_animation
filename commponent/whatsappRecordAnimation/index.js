import React, { useState } from "react";
import { 
    Animated,
    Dimensions,
    StyleSheet,
    View,
    LayoutAnimation,
    UIManager
} from "react-native";
import { TouchableHighlight } from "react-native";


const {width} = Dimensions.get("window");
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const WhatsappRecordAnimation = () => {

    const [rightWidth, setRightWidth] = useState(width * 0.2) ;
    const [leftWidth, setLeftWidth] = useState(width * 0.8) ;
    
    const pressHandel = () => {
        LayoutAnimation.spring();
        setRightWidth(width * 0.8);
        setLeftWidth(width * 0.2)
    }
    return(
        <View style={styles.wraper}>
            <Animated.View style={[styles.left,  {width : leftWidth} ]}/>
            <TouchableHighlight onPress={ pressHandel } >
            <Animated.View style={[styles.right, {width : rightWidth} ]}/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    left :{
        backgroundColor : "red",
        height: 50,
        borderColor : "red",
        borderWidth : 5,
        padding: 5,
        borderRadius: 5,


    },
    right :{
        backgroundColor : "green",
        height: 50,
        borderColor : "green",
        borderWidth : 5,
        padding: 5,
        borderRadius : 5,

    },
    wraper : {
        flexDirection : "row",
        padding:3
    }
  });



export default WhatsappRecordAnimation;