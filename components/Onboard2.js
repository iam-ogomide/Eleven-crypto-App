import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';


const {width} = Dimensions.get('window')

const Onboard2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.mainHeader}>
        <Image source={require('../assets/images/logo2.png')} style={styles.logo}/>
        <Text style={styles.MainText}>ELEVEN</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={require('../assets/images/image3.jpg')} style={styles.image} />
      </View>
      <View style={styles.bodyTextCon}>
        <Text style={styles.bodyText}>The Most Trusted Crypto Wallet and Exchange</Text>
      </View>
      <TouchableOpacity style={{alignItems:'flex-end', marginRight:20}} onPress={() => navigation.navigate('Onboard3')} activeOpacity={0.7}>
        <View style={styles.btnCon}>
          <Text style={styles.btn}>Next</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
      
    </View>
  )
}

export default Onboard2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainHeader:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'center',
    marginTop:20
  },
  MainText:{
    fontFamily:'lexendGiga-bold',
    fontSize:18,
    color:'#000',
  },
  logo:{
    width:40,
    height:40
  },
  imageWrapper:{
    height:380,
    width:width*0.90,
    backgroundColor:'#ffffff',
    marginLeft:20,
    borderRadius:20,
    marginTop:20
  },
  image:{
    width:'100%',
    height:"100%",
    borderRadius:20,
  },
  bodyTextCon:{
    marginHorizontal:20,
    marginTop:30,
  },
  bodyText:{
    fontFamily:'lexendGiga-bold',
    fontSize:28,
    color:'#000',
  },
  btnCon:{
    width:120,
    height:45,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:"center",
    marginTop:40,
    borderRadius:30,
    marginBottom:30
  },
  btn:{
    color:'#fff',
    fontSize:18
  }
})