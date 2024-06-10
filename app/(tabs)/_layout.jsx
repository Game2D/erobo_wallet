import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  )
}

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          height: 82,
          borderTopWidth: 0,
          position: 'static',
        }
      }}
    >
      <Tabs.Screen 
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.home}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='market'
        options={{
          title: 'Market',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.statistics}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='wallet'
        options={{
          title: 'Wallet',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.wallet}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='insights'
        options={{
          title: 'Insights',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon 
              icon={icons.insights}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}

export default TabLayout