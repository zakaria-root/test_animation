import React, { useState } from "react"
import { 
    TextInput, 
    StyleSheet, 
    View, 
    FlatList,
    Animated
} from "react-native";





const RenderPostInput = () => {
    
    const height = new Animated.Value(50);
    return(
        <Animated.View
        style={[styles.input, {height : height}]}
        >
            <TextInput
            placeholder="Whats your Post ..?"
            onFocus={ 
                () => {
                    Animated.spring(height, {
                    toValue: 200
                }).start( () => {alert("it's work it !! ")} )
            }
            }
            />
        </Animated.View>
    )
}

const Post = () => {
    return(
        <View style={styles.post}/>
    )
}
const PostListItem = () => {
    return(
        <FlatList 
        data={[1, 2, 3]}
        renderItem = {() => <Post />}
        />
    )
}

const PostInput =  () => {
    return(
        <View style={styles.container}>
            <RenderPostInput />
            <PostListItem />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding : 10,
      
    },
    input:{
        height :50,
        width : "100%",
        padding: 10,
        borderColor : "#000",
        borderRadius : 5,
        borderWidth : 1,
        
    },
    post:{
        width : "100%",
        height :180,
        backgroundColor : "red",
        marginTop : 15,
        borderRadius : 8,
        borderWidth : 1,
        }
  });


export default PostInput;
