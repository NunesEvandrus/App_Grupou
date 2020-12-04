import React, {} from 'react';
import {crateBottonTabNavigator, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import Chat from '../pages/Chat'
import Settings  from '../pages/Settings'

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    return (

        <Tab.Navigator
            initialRouteName="Grupos"
            tabBarOptions={
                {
                activeTintColor:'tomato',
                inactiveTintColor:'#ccc'
                }
            }>
            <Tab.Screen name="Grupos" 
                        component={Chat}
                        options= {
                            {
                                tabBarIcon : ({color}) => (
                                <MaterialCommunityIcons name="chat" color={color} size={32}/>
                                )
                            }
                        }
            />
            <Tab.Screen name="Configurações"
                        component={Settings} 
                        options= {
                            {
                                tabBarIcon : ({color}) => (
                                <MaterialCommunityIcons name="settings" color={color} size={32}/>
                                )
                            }
                        }/>
        </Tab.Navigator>
        
    )

}

export default AppRoutes;