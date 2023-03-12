import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';


const Accounts = () => {
  return (
    <View style={styles.container}>
        <ScrollView>

        {/* Header */}
      <View style={styles.headerWrapper}>
        <Image source={require('../assets/images/creator5.jpg')} style={styles.headerImage} />
        <Text style={styles.headerText}>Ogomide Samuel</Text>
        <Text style={styles.headerEmail}>mhidesamuel@gmail.com</Text>
        <View style={styles.IdWrapper}>
            <Text style={styles.IdText}>ID 6382192</Text>
            <Icon name='content-copy' size={20} color={'#000'}/>
        </View>
      </View>

      {/* Settings body */}
      <View style={styles.settingsWrapper}>
        <View style={styles.miniSettingsWrapper}>
            <View style={styles.rightSideCon}>
                <View style={styles.IconCon}>
                    <Icon name='account' size={24} color={'#000'}/>
                </View>
                <Text style={styles.rightSideText}>Edit profile</Text>
            </View>
            <Icon name='chevron-right' size={30} color={'#000'} />
        </View>
        <View style={styles.miniSettingsWrapper}>
            <View style={styles.rightSideCon}>
                <View style={styles.IconCon}>
                    <Icon name='account-alert' size={23} color={'#000'}/>
                </View>
                <Text style={styles.rightSideText}>Account Security</Text>
            </View>
            <Icon name='chevron-right' size={30} color={'#000'} />
        </View>
        <View style={styles.miniSettingsWrapper}>
            <View style={styles.rightSideCon}>
                <View style={styles.IconCon}>
                    <MaterialIcons name='people' size={24} color={'#000'}/>
                </View>
                <Text style={styles.rightSideText}>Referrals</Text>
            </View>
            <Icon name='chevron-right' size={30} color={'#000'} />
        </View>
        <View style={styles.miniSettingsWrapper}>
            <View style={styles.rightSideCon}>
                <View style={styles.IconCon}>
                    <MaterialIcons name='verified-user' size={24} color={'#000'}/>
                </View>
                <Text style={styles.rightSideText}>Verification</Text>
            </View>
            <Icon name='chevron-right' size={30} color={'#000'} />
        </View>
        <View style={styles.miniSettingsWrapper}>
            <View style={styles.rightSideCon}>
                <View style={styles.IconCon}>
                    <MaterialIcons name='message' size={24} color={'#000'}/>
                </View>
                <Text style={styles.rightSideText}>Customer support</Text>
            </View>
            <Icon name='chevron-right' size={30} color={'#000'} />
        </View>
      </View>

      </ScrollView>



    </View>
  )
}

export default Accounts

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    headerWrapper:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
    },
    headerImage:{
        width:150,
        height:150,
        borderRadius:150,
    },
    headerText:{
        marginTop:20,
        fontSize:17,
        fontWeight:'bold',
    },
    headerEmail:{
        marginTop:5,
        fontSize:15,
        textDecorationLine: 'underline',
    },
    IdWrapper:{
        flexDirection:"row",
        marginTop:10,
        height:50,
        backgroundColor:'#a6a6a6',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:30,
        borderRadius:30,
    },
    IdText:{
        marginRight:7,
        fontWeight:'bold',
    },
    settingsWrapper:{
        marginTop:30,
        marginHorizontal:30,
        marginBottom:30,
    },
    miniSettingsWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
    },
    rightSideCon:{
        flexDirection:"row",
        alignItems:'center',
    },
    IconCon:{
        marginRight:5,
        height:40,
        width:40,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    rightSideText:{
        fontSize:16,
        fontWeight:'400',
    },
})