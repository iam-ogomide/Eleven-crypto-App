import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';

const News = () => {
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{marginTop:60}}>
            <View style={styles.MainWrapper}>
                <Text style={styles.MainText}>Your crypto hub</Text>
                <Text style={styles.SubText}>Invest,trade track Defi's and crypto portfolio, fiats,on-off-rampfa-stack</Text>
                <View style={{bottom:25,position:'absolute',left:15}}>
                    <Text style={styles.Learn}>Learn More </Text>
                </View>
            </View>
            <View style={styles.MainWrapper}>
                <Text style={[styles.MainText, {width:'50%',fontSize:25}]}>Top Customer Support</Text>
                <Text style={styles.SubText}>Our Customer service respond fast and swiftly</Text>
                <View style={{bottom:25,position:'absolute',left:15}}>
                    <Text style={styles.Learn}>Learn More </Text>
                </View>
            </View>
            <View style={[styles.MainWrapper, {marginBottom:20}]}>
                <Text style={[styles.MainText, {width:'50%',fontSize:25}]}>Easy Start</Text>
                <Text style={styles.SubText}>Use our app easily whether you are an experienced trader or beginner</Text>
                <View style={{bottom:25,position:'absolute',left:15}}>
                    <Text style={styles.Learn}>Learn More </Text>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    </View>
  )
}

export default News

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
    },
    MainWrapper:{
        marginHorizontal:10,
        height:200,
        width:'95%',
        borderWidth:1,
        color:'#000',
        paddingLeft:15,
        paddingTop:20,
        borderRadius:20,
        marginTop:10
    },
    MainText:{
        fontSize:35,
        fontWeight:'bold',
    },
    SubText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#a8a8a8',
        marginTop:7
    },
    Learn:{
        fontWeight:'bold',
        fontSize:18
    },
})