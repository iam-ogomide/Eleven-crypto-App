import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import Home from '../components/Home';
import News from '../components/News';
import Accounts from '../components/Accounts';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
    return (
        <View style={styles.BottomnavWrapper}>
            {state.routes.map((route, index)=> {
                const {options} = descriptors[route.key];
                const isFocused = state.index == index;
                const TabBarIcon = options.tabBarIcon;
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate(route.name)}>
                        <TabBarIcon size={30} color={isFocused ? '#000000': '#A8A8A8'} focused={isFocused}/>
                        {isFocused && (
                            <View style={styles.UpIcon}></View>
                        )}
                        
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default function BottomNavigator() {
    return <Tab.Navigator screenOptions={{headerShown:false}} tabBar={(props) =><MyTabBar {...props}/>}>
        <Tab.Screen name='HomeScreen' component={Home} options={{tabBarIcon:({focused, color, size}) =><Icon color={color} size={size} name={focused ? 'home': 'home-outline'}/>}}/>
        <Tab.Screen name='NotificationScreen' component={Home} options={{tabBarIcon:({focused, color, size}) =><Icon color={color} size={size} name={focused ? 'chart-box': 'chart-box-outline'}/>}}/>
        <Tab.Screen name='NewsScreen' component={News} options={{tabBarIcon:({focused, color, size}) =><Icon color={color} size={size} name={focused ? 'newspaper-variant': 'newspaper-variant-outline'}/>}}/>
        <Tab.Screen name='FavouriteScreen' component={Accounts} options={{tabBarIcon:({focused, color, size}) =><Ionicons color={color} size={size} name={focused ? 'settings': 'settings-outline'}/>}}/>
    </Tab.Navigator>
}

const styles =StyleSheet.create({
    BottomnavWrapper:{
        flexDirection:'row',
        padding:20,
        backgroundColor:"#ffffff",
        borderTopWidth:0.3,
        borderColor:'#A8A8A8',
        alignItems:'center',
        justifyContent:'space-between',
    },
    UpIcon:{
        height:6,
        width:30,
        position:'absolute',
        backgroundColor:'#000000',
        top:-20,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
    },
})