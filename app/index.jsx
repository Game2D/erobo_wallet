import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { images, icons } from '../constants';
import { socials } from '../constants/text';
import Input from '../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const App = () => {
  return (
    <SafeAreaView className="relative bg-gray-100 w-full">
      <View className="flex items-center justify-center px-8 z-20">
        <Image
          source={images.getStarted}
        />
        <Text className="text-3xl font-psemibold">Register</Text>

        <View className="flex flex-col gap-y-4 mt-8">
          <Input 
            placeholder="Username"
            leftIcon={icons.user}
          />
          <Input 
            placeholder="Email"
            leftIcon={icons.email}
          />
          <Input 
            placeholder="Password"
            leftIcon={icons.password}
          />

          <TouchableOpacity 
            className="bg-black-100 rounded-full flex py-4 items-center justify-center"
            activeOpacity={0.7}
            onPress={() => router.push('/home')}
          >
            <Text className="text-white font-psemibold">
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-8 items-center justify-center mt-8">
          {socials.map((social, index) => (
            <TouchableOpacity 
              key={index}
              className="bg-white rounded-full flex p-4 items-center justify-center"
              activeOpacity={0.7}
            >
              <Image 
                source={social.icon}
                className="w-[24px] h-[24px]"
                resizeMode='cover'
              />
            </TouchableOpacity>
          ))}
        </View>

        <StatusBar style="auto" />
      </View>

      <Image
        source={images.blur1}
        className="absolute top-20 left-0 w-full h-full z-10"
      />
    </SafeAreaView>
  );
}

export default App;