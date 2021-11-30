import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {Home, OrderDelivery, Restaurant} from '../screens';

import {Colors, icons, Sizes} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
              tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.primary : Colors.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Restaurant'}
        component={Restaurant}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.primary : Colors.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.primary : Colors.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'OrderDelivery'}
        component={OrderDelivery}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.primary : Colors.secondary,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
