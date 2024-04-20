import react from 'react';
import { View,  StyleSheet, Text,TouchableOpacity, ScrollView,} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
  return (
    <ScrollView style={styles.container}horizontal={true}showsHorizontalScrollIndicator={false}>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton} 
        title="Final" OnClick={() => navigation.navigate('Final')}>
            <AntDesign name='addfolder' size={20} color="rgb(0,255,127)" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="rgb(220,20,60)" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="rgb(28,28,28)" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="rgb(0,0,0)" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ActionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="rgb(0,0,0)" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    maxHeight: '84',
    marginBottom: '',
    marginTop: '18',
    paddingEnd: '14',
    paddingStart: '14',
  },
  ActionButton: {
    alignItems: 'center',
    marginRight: 29,
  },
  areaButton: {
    backgroundColor: '#ffffff',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});



