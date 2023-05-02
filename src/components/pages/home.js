import React from "react";
import { View, Button, TouchableOpacity, Text } from 'react-native';
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";



const Home = ({ navigation }) => {

  const ShopHeader = ({ numItems, total}) => {
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
          marginTop: 10,
          fontSize: 16,
          color: 'purple',
          fontWeight: 'bold',
          textDecorationLine: 'underline'
        }}>{numItems} items (${total})
        </Text>
        </TouchableOpacity>
        
      </View>
    )
  };
  
  return (
    <View style={{flex: 1}}>
      <ShopHeader  numItems={5} total={200}/>
      <BookList />
      <ShoppingCartTable />
    </View>
  )
}
export default Home;