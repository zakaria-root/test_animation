import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Animated, PanResponder, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { FlatList } from 'react-native';
import { left } from 'inquirer/lib/utils/readline';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LayoutAnimation } from 'react-native';
import { UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { randBetween } from 'big-integer';

export default function InstagramHeartBounsAnimation() {

    if (Platform.OS === 'android') 
    {  
        if (UIManager.setLayoutAnimationEnabledExperimental) 
        {   
            UIManager.setLayoutAnimationEnabledExperimental(true);  
        }
    }

    const WIDTH_SCREEN = Dimensions.get('screen').width;
    const SWIPE_WIDTH = WIDTH_SCREEN / 3;

    const [liked , setLiked] = useState(false);
    const AnimtedIcon = Animated.createAnimatedComponent(AntDesign);
    const currentValue = new Animated.Value(1);
    const [visibel, setVisibel] = useState(false);
    const [counter, setCounter] =  useState(-1);
    const likeOpacity = new Animated.Value(1);
    const position  = new Animated.ValueXY({x:0, y:0});
    const [cardCounter , setCardCounter] = useState(0);
    
    const cardOpacity = position.x.interpolate({
        inputRange:[-WIDTH_SCREEN,0,WIDTH_SCREEN],
        outputRange:[0, 1, 0]
    })

    const cardRotate = position.x.interpolate({
        inputRange:[-WIDTH_SCREEN,0,WIDTH_SCREEN],
        outputRange:['-10deg','0deg','10deg']
    })

    const pan  = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove:Animated.event([
            null,
            {dx:position.x}
        ]),
        onPanResponderRelease:(e, gesture) => {
            
            if(gesture.dx > SWIPE_WIDTH){
                swiped("right")
            }else if (gesture.dx < -SWIPE_WIDTH) {
                swiped("left")
            }
            else{
                Animated.spring(position,{
                    toValue:{x:0 ,y:0}
                }).start()
            }
        }
    })

    const swiped = (direction) => {
        const dx = (direction == "right") ? (WIDTH_SCREEN +20) : (-WIDTH_SCREEN -20);

        Animated.parallel([
            
            Animated.spring(position, {
                toValue:{x: dx, y:0},
                useNativeDriver: false
            }).start(() => {
                setCardCounter(cardCounter+1)
                LayoutAnimation.spring();
                position.setValue({x:0,y:0});
            }
            
            ),
            
        ])
    }

    const cardView = (item,index) => {
        return(
            <Card style={{ marginBottom: 25 , borderRadius: 15}}>
                {(visibel && index == counter) && <AnimtedIcon 
                size={43}
                color={'red'}
                name="heart"
                style={{ 
                    position: 'absolute',
                    top: 100,
                    left: 180,
                    zindex:3,
                    elevation: 50,
                    transform:[
                        {scale: currentValue},
                        
                    ],
                    opacity: likeOpacity
                }}

            />}
                <Card.Cover source={{ uri : item.uri }} />
                <Card.Actions >
                    <AntDesign name={liked && index == counter?"heart":"hearto"} size={24} color="red"
                    onPress={() => {
                        if(liked == false){
                            setVisibel(true)
                        }
                        setCounter(index);
                        setLiked(!liked)
                    }}
                    />
                    <Ionicons name="chatbubble-outline" size={24} color="gray" style={{ paddingLeft: 20}}/>
                    <FontAwesome name="send-o" size={24} color="gray" style={{ paddingLeft: 20}} />
                </Card.Actions>
            </Card>
        )
    }
    useEffect(() => {
        if(liked == true){
            Animated.spring(currentValue, {
            toValue: 2,
            friction: 4,
            useNativeDriver: false
        }).start(() => {
            Animated.parallel([
                Animated.spring(currentValue, {
                toValue : 1,
                useNativeDriver: false
            }).start(),
            Animated.spring(likeOpacity,{
                toValue:0,
                useNativeDriver: false
            }).start(() => {
                setVisibel(false);
            })
            ])
            
        })
        }
        
    },[liked]);

    const data = [
        {id : 1, uri : "https://images.unsplash.com/photo-1632479145590-bfb41ecfedc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"},
        {id : 2, uri : "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"},
        {id : 3, uri : "https://images.unsplash.com/photo-1632479807993-52a16d48e99e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"},
        {id : 4, uri : "https://images.unsplash.com/photo-1632503429233-56138b85634d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"},
        {id : 5, uri : "https://images.unsplash.com/photo-1632407666195-97e6c77ff8ea?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id : 6, uri : "https://images.unsplash.com/photo-1632459103966-d17456fa22cd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id : 7, uri : "https://images.unsplash.com/photo-1632347866614-61b43ccf2dda?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id : 8, uri : "https://images.unsplash.com/photo-1632181044825-8ee6ad952fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"},
    ];


    return (
    <View style={styles.container}>
        
        <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
            if(index < cardCounter)
            return null
            else{
            return (index == cardCounter)?(
                <Animated.View
                {...pan.panHandlers}
                style={{
                    transform: [
                        {translateX: position.x},
                        // {rotate: cardRotate},
                    ],
                    opacity: cardOpacity,
                    
                    
                }}
                >
                {cardView(item,index)}
            
                </Animated.View>
            ):(
                <Animated.View>

                    {cardView(item,index)}
                </Animated.View>
            )
        }
        }}
        />
        
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gray'
    },

});
