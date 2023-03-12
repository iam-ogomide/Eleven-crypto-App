import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import axios from 'axios';
import { VictoryLine } from 'victory-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';

const Details = ({navigation, route}) => {
    const datas = route.params;

    const [data, setData] = useState()
  const [coin, setCoin] = useState('bitcoin')
  const [period, setPeriod] = useState(30)

  useEffect(() => {
    getData()
  }, [coin, period])

  async function getData() {
		try {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${period}`
			)
			const formatData = response.data.prices.map(function(i) {
				return {
					x: i[0],
					y: i[1]
				}
			})
			setData(formatData)
		} catch (error) {
			console.log(error)
		}
	}
  return (
    <View style={styles.container}>
        <ScrollView>

        {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.LeftheaderWrapper}>
            <Icon onPress={()=> navigation.goBack()} name='chevron-left' size={30} color={'#000000'} style={{marginRight:10}}/>
            <Image source={datas.image} style={styles.image}/>
            <View style={{marginLeft:7}}>
                <Text style={styles.title}>{datas.title}</Text>
                <Text style={styles.subtitle}>{datas.subtitle}</Text>
            </View>
        </View>
        <View style={styles.RightheaderWrapper}>
            <Icon name='bell-badge-outline' size={24} color={'#000'}/>
        </View>
      </View>

      {/* MiniBar */}
      <View style={styles.MiniBarWrapper}>
        <Text style={styles.MiniTitle}>{datas.title} Price</Text>
        <View style={styles.MiniPrice}>
            <Text style={styles.MiniCprice}>${datas.cprice}</Text>
            <View style={styles.MiniWrapper}>
                <Text style={styles.MiniTitlePrice}>{datas.price}</Text>
                <Text style={styles.MiniTitlePercent}>({datas.percent})</Text>
            </View>
        </View>
      </View>


      <View style={styles.coins}>
        <Text 
          style={[styles.titles]}
          onPress={() => setCoin('bitcoin')}
        
        >
          {datas.title}
        </Text>
      </View>

      {/* Chart Line */}
      <VictoryLine
        style={{data: {
          stroke:'#000',
          strokeWidth:2,
        }}}
        width={400}
        height={200}
        data={data}
      />

      {/* Time for chart */}
      <View style={styles.timeWrapper}>
				<Text style={[ styles.time, period === 1 ? styles.underline : null ]} onPress={() => setPeriod(1)}>
					1 Day
				</Text>
				<Text style={[ styles.time, period === 7 ? styles.underline : null ]} onPress={() => setPeriod(7)}>
					1 Week
				</Text>
				<Text style={[ styles.time, period === 30 ? styles.underline : null ]} onPress={() => setPeriod(30)}>
					1 Month
				</Text>
				<Text style={[ styles.time, period === 365 ? styles.underline : null ]} onPress={() => setPeriod(365)}>
					1 Year
				</Text>
			</View>

        {/* Bottom */}
        <View style={styles.bottomWrapper}>
            <Text style={styles.bottomMainText}>Key Stats</Text>
            <View style={styles.bottomMiniCon}>
                <Text style={styles.bottomVolText}>Today's Volume</Text>
                <Text style={styles.bottomVolPrice}>{datas.vol}</Text>
            </View>
            <Text style={styles.bottomVolNote}>Trading volume is the amount of a given cryptocurrency that is bought or sold on an exchange in a given time period.</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => alert('Bid Placed')}>
            <Text style={styles.buttonText} >Trade</Text>
        </TouchableOpacity>

        </ScrollView>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    headerWrapper:{
        flexDirection:'row',
        marginTop:40,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'space-between',
    },
    LeftheaderWrapper:{
        flexDirection:"row",
    },
    image:{
        width:40,
        height:40,
        borderRadius:20,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
    },
    subtitle:{
        fontWeight:'bold',
        color:'#ccc'
    },
    MiniBarWrapper:{
        marginTop:20,
        marginHorizontal:20,
        height:90,
        width:'91%',
        backgroundColor:'#ccc',
        borderRadius:20,
        paddingLeft:15,
        justifyContent:'center'

    },
    MiniTitle:{
        fontSize:16,
        fontWeight:'bold',
        color:'gray',
        marginTop:5
    },
    MiniPrice:{
        flexDirection:'row',
    },
    MiniCprice:{
        fontSize:23,
        fontWeight:'bold',
    },
    MiniWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
    },
    MiniTitlePrice:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:20
    },
    MiniTitlePercent:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:5,
        color:'gray',
    },
    titles: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10
	},
	timeWrapper: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
        marginHorizontal:20,
        backgroundColor:"#a8a8a8",
        borderRadius:10,
	},

	coins: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
        marginHorizontal:20,
	},
	time: {
		margin: 10,
        fontSize:16,
	},
	header: {
		position: "absolute",
		top: 50,
		fontSize: 30,
		fontWeight: "bold"
	},
	underline: { textDecorationLine: "underline" },
    bottomWrapper:{
        marginTop:15,
        marginHorizontal:20,
        backgroundColor:'#DCDCDC',
        paddingLeft:15,
        borderRadius:15
    },
    bottomMainText:{
        fontSize:20,
        fontWeight:'bold',
        color:'gray',
        marginTop:10,
    },
    bottomMiniCon:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:10,
        marginVertical:7
    },
    bottomVolText:{
        fontSize:25,
        fontWeight:'bold',
    },
    bottomVolPrice:{
        fontSize:25,
        fontWeight:'bold',
    },
    bottomVolNote:{
        fontSize:18,
        lineHeight:18,
        marginVertical:15,
        color:'gray'
    },
    button:{
        width:'90%',
        height:60,
        backgroundColor:'#000000',
        marginHorizontal:20,
        marginTop:30,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    buttonText:{
        color:'#ffffff',
        fontSize:20,
    },

})