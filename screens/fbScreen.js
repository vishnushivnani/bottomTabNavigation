
import React from 'react';
import {StyleSheet,View,Text} from 'react-native'


export default class FbScreen extends React.Component{
  render(){
    return(
    <View  style= {{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
        <Text style={styles.displayText}>
            FBSCREEN
        </Text>
    </View>
    )
  }
}
 const styles = StyleSheet.create({
   container:{
    
     color:'red',
     alignItems:'center',
     alignSelf:'center',
     justifyContent:'center',
     fontSize:20,
    
     flex:1
    
   },
   displayText:{
     color:'red',
     fontWeight:'bold'
    


   }
 })
