import { StyleSheet, Text, View, Image,FlatList, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import collections from '../assets/data/Collection';
import Details from './Details';

const {width} = Dimensions.get('window')

const Card = ({data, navigation}) => {
  return(
    <TouchableOpacity style={styles.CoinWrapper} onPress={()=>navigation.navigate("Details",data)} activeOpacity={0.7}>
      <View style={styles.LeftCoinWrapper}>
        <Image source={data.image} style={styles.imageCoin} />
        <View style={{marginLeft:7}}>
          <Text style={styles.leftTitle}>{data.title}</Text>
          <Text style={styles.leftSubtitle}>{data.subtitle}</Text>
        </View>
      </View>
      <View style={styles.RightCoinWrapper}>
        <Text style={styles.price}>${data.price}</Text>
        <Text style={[styles.percent]}>{data.percent}%</Text>
      </View>
    </TouchableOpacity>
  )
}

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={'transparent'} translucent/>

      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.rightheaderWrapper}>
          <Image source={require('../assets/images/creator5.jpg')} style={styles.headerImage} />
          <Text style={styles.headerName}>Ogomide</Text>
          <Icon name='chevron-right' size={24} color={'#000'}/>
        </View>
        <Icon name='bell-badge-outline' size={24} color={'#000'}/>
      </View>

      {/* Balance */}
      <View style={styles.BalanceWrapper}>
        <View style={styles.TopBalanceCon}>
          <Text style={styles.TopBalanceText}>Total balance in</Text>
          <Text style={{color:"#293071", fontWeight:'700',marginLeft:5, fontSize:16}}>USD</Text>
        </View>
        <View style={styles.MainBalance}>
          <Text style={styles.MainBalanceText}>$37,762.12</Text>
        </View>
        <View style={styles.BottomBalance}>
          <Icon name='arrow-up' size={20} color={'green'} style={{fontWeight:'bold'}}/>
          <Text style={{color:"green", fontWeight:'500', fontSize:16}}>$391 (8.12%)</Text>
        </View>
      </View>

      {/* MiniBar */}
      <View style={styles.MiniBarWrapper}>
        <View style={styles.MiniBox}>
          <Icon name='arrow-up-right' size={30} color={'#000'}/>
          <Text style={styles.MiniBoxText}>Send</Text>
        </View>
        <View style={styles.MiniBox}>
          <Icon name='arrow-down' size={30} color={'#000'}/>
          <Text style={styles.MiniBoxText}>Deposit</Text>
        </View>
        <View style={styles.MiniBox}>
          <Icon name='arrow-collapse' size={30} color={'#000'}/>
          <Text style={styles.MiniBoxText}>Convert</Text>
        </View>
        <View style={styles.MiniBox}>
          <Icon name='arrow-down-left' size={30} color={'#000'}/>
          <Text style={styles.MiniBoxText}>Withdraw</Text>
        </View>
      </View>

      {/* Coins List */}
      <View style={styles.CoinName}>
        <Text style={styles.CoinNameText}>Assets</Text>
        <View style={styles.miniCoinCon}>
          <Text style={{color:"#ccc", fontWeight:'500', fontSize:16, marginRight:3}}>24h</Text>
          <Icon name='chart-box-outline' size={25} color={'#555'}/>
        </View>
      </View>

        <FlatList 
          data={collections}
          renderItem={({item}) => <Card data={item} navigation={navigation}/>}
          showsVerticalScrollIndicator={false}
        />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  headerWrapper:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:30,
    marginHorizontal:20,
  },
  rightheaderWrapper:{
    flexDirection:'row',
    alignItems:'center',
  },
  headerImage:{
    width:40,
    height:40,
    borderRadius:20,
  },
  headerName:{
    fontSize:16,
    fontWeight:'600',
    marginHorizontal:10
  },
  BalanceWrapper:{
    marginTop:40,
    marginHorizontal:20,
  },
  TopBalanceCon:{
    flexDirection:'row',
  },
  TopBalanceText:{
    fontSize:16,
    color:'#555',
    fontWeight:'400'
  },
  MainBalance:{
    marginTop:10,
  },
  MainBalanceText:{
    fontSize:35,
    fontWeight:'bold'
  },
  BottomBalance:{
    flexDirection:"row",
    marginTop:7,
    alignItems:'center',
  },
  MiniBarWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:25,
    marginHorizontal:20
  },
  MiniBox:{
    backgroundColor:'#ccc',
    width:90,
    height:90,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25
  },
  MiniBoxText:{
    marginTop:7,
    fontWeight:'500',
  },
  CoinName:{
    flexDirection:'row',
    marginTop:25,
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:15
  },
  CoinNameText:{
    fontSize:19,
    color:'#000',
    fontWeight:'bold'
  },
  miniCoinCon:{
    flexDirection:'row',
    alignItems:'center',
  },
  CoinWrapper:{
    height:80,
    width:width*0.90,
    backgroundColor:'#ffffff',
    marginHorizontal:20,
    shadowColor:'#A8A8A8',
    shadowRadius:10,
    shadowOpacity:0.3,
    shadowOffset:{height:10},
    elevation:10,
    borderRadius:20,
    marginBottom:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  LeftCoinWrapper:{
    flexDirection:"row",
    alignItems:'center',
    marginLeft:10,
  },
  imageCoin:{
    width:40,
    height:40
  },
  leftTitle:{
    fontSize:16,
    fontWeight:'bold'
  },
  leftSubtitle:{
    fontWeight:'bold',
    color:'#ccc'
  },
  RightCoinWrapper:{
    marginRight:10,
  },
  price:{
    fontSize:16,
    fontWeight:'bold'
  },
  percent:{
    color:'#ccc'
  },
})