import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const NewsCard = ({ title, image, date, size }) => {
  return (
    <View className={`flex ${size === 'lg' ? '' : 'items-center flex-row'}`}>
      <Image
        source={image}
        className={`${size === 'lg' ? 'w-full h-[190px]' : 'w-[110px] h-[110px]' }`}
        resizeMode='contain'
      />

      <View className={`flex justify-center ${size === 'lg' ? '' : 'max-w-[220px] ml-6'}`}>
        <Text className="font-pmedium text-[14px] mt-4 break-all">
            {title}
        </Text>

        <View className="flex flex-row gap-2 mt-2">
            <Image 
                source={icons.time}
                className="mt-0.5"
            />

            <Text className="font-pmedium text-[14px] text-gray-200">
                {date}
            </Text>
        </View>
      </View>
    </View>
  )
}

export default NewsCard