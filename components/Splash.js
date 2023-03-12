import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import React from 'react'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

const Splash = ({navigation}) => {
    setTimeout(()=> {
        navigation.navigate('Onboard2')
    },3000)

    const [loaded] = useFonts({
        'lexendGiga-bold': require('../assets/fonts/LexendGiga-Bold.ttf'),
        'lexendGiga-light': require('../assets/fonts/LexendGiga-Light.ttf'),
        'lexendGiga-medium': require('../assets/fonts/LexendGiga-Medium.ttf'),
        'lexendGiga-regular': require('../assets/fonts/LexendGiga-Regular.ttf'),
        'lexendGiga-semibold': require('../assets/fonts/LexendGiga-SemiBold.ttf'),
    });
    
    if (!loaded) {
        return null;
    }
  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content' hidden={false} />
        <Image source={require('../assets/images/logo2.png')} style={styles.logo}/>
      <Text style={styles.MainText}>ELEVEN</Text>
      <Text style={styles.bodyText}>Best cryptocurrency exchange</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MainText:{
        fontFamily:'lexendGiga-bold',
        fontSize:30,
        color:'#fff',
    },
    logo:{
        width:100,
        height:100
    },
    bodyText:{
        fontFamily:'lexendGiga-medium',
        fontSize:15,
        color:'#fff'
    }
})