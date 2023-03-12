import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native';


export default function Onboard({props, navigation}) {
  const data = [
    {
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/images/image1.jpg')
    },
    {
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/images/image2.jpg'),
    },
    {
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../assets/images/image3.jpg'),
    },
    {
      title: 'Spend more time doing the things that you love',
      text: 'Get started within five minutes',
      image: require('../assets/images/apple.png'),
    },
  ];

  //Defining the functions
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image}/>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    )
  }
  const keyExtractor =(item) =>item.title;

  const renderDoneButton= () =>{
    return (
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
      </TouchableOpacity>
    )
  }
  const renderNextButton=() =>{
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    )
  }
  const renderPrevButton=()=>{
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    )
  }

  ///////
  // const handleDone = ()=> {
  //   props.handleDone()
  // }
  
  return (
    <View style={{flex: 1}}>
        <StatusBar style="auto" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          dotStyle={styles.dotstyle}
          activeDotStyle={styles.activeDotStyle}
          data={data}
          // onDone={handleDone}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  slide:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    marginBottom:'30%'
    
  },
  image:{
    // marginVertical:60,
    width:500,
    height:700,
  },
  title:{
    fontSize:24,
    color:'#000',
    textAlign:'center',
    marginHorizontal:57,
  },
  text:{
    fontSize:14,
    color:'#666666',
    textAlign:'center',
    marginHorizontal:57,
    marginTop:20,
  },
  rightTextWrapper:{
    width:40,
    height:40,
    marginRight:20,
    alignItems:'center',
    justifyContent:'center',
  },
  rightText:{
    color:'#1c215d',
    fontSize:15,
  },
  leftTextWrapper:{
    width:40,
    height:40,
    marginLeft:20,
    alignItems:'center',
    justifyContent:'center',
  },
  leftText:{
    color:'#1c215d',
    fontSize:15,
  },
  dotStyle:{
    backgroundColor:'#8f8FAD'
  },
  activeDotStyle:{
    backgroundColor:'#1C215D'
  }
});
