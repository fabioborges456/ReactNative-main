import {View,Text,StyleSheet,FlatList} from 'react-native'

import Header from '../../componentes/Header'
import Balance from '../../componentes/Balance'
import Movements from '../../componentes/Movements'
import Actions from '../../componentes/Actions'

const list = [
  {
   id:1,
  label:'Boleto conta de Luz',
  value:'300,90',
  date:'09/07/2023',
  type:'0',
},
{
   id:2,
  label:'Pix Cliente X',
  value:'2.500,90',
  date:'09/07/2023',
  type:'1',
},
{
   id:3,
  label:'Salário',
  value:'7.200,90',
  date:'09/07/2023',
  type:'1',
},
]



export default function Home(){
 return(
   <View style={style.container}>
   <Header name='Monkey D. Luffy' />

    <Balance saldo='10.935,43' gastos='-300,90'/>

    <Actions/>
     <Text style={style.title}>Últimas Movimentações</Text>  
     <FlatList
     style={style.list}
     data={list}
     keyExtractor={(item) => String(item.id)}
     showsVerticalScrollIndicator={false}
     renderItem={ ({item}) => <Movements data={item} /> }
     />

   </View>
 );
}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fafafa',
},
title:{
  fontSize:18,
  fontWeight:'bold',
  margin:14,


},
});



