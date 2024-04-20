import React from 'react'
import{
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20 ;

export default function Header({ name}){ 
  return( 
    <View style={styles.container}>
    <View style={styles.content}>
 <Text style ={styles.username}>{name}</Text> 


<TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} >
<Feather name='user' size={20} color='#fff'/>
</TouchableOpacity>



    </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container:{
    backgroundColor:'#7d1b90',
    paddingTop:StatusBarHeight,
    flexDirection:'row',
    paddingStart:16,
    paddingEnd:16,
    paddingBottom:44,
  },
    content:{
      flex:1,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
    },

username:{
fontSize: 18,
color: '#green',
fontWeight: 'bold'
},
buttonUser:{
 width:50,
 height:50,
backgroundColor: 'rgba(255,255,255,0.5)',
justifyContent: 'center',
alignItems:'center',
borderRadius:44 / 2,
}, 
})



