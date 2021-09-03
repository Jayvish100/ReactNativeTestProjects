import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../src/screens/HomeScreen';
import SettingsScreen from '../src/screens/SettingsScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        
        >

            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="settings" color={color} size={size} />
                ),
                tabBarBadge: 3,
              }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;