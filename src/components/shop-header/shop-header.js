import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';



const ShopHeader = ({ numItems, total, navigation}) => {
  return (
    <View 
    style={{
      flexDirection: "row",
      margin: 7,
      justifyContent: 'flex-end'
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('CartPage')}>
      <Text
      style={{
        fontSize: 16,
        color: 'purple',
        fontStyle: 'italic'
      }}>{numItems} items (${total})
      </Text>
      </TouchableOpacity>
      
    </View>
  )
};
export default ShopHeader;