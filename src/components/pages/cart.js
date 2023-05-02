import React from "react";
import { View, Text, Button } from 'react-native';
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const Cart = ({ navigation }) => {
  return (
    <View style={{flex: 1, marginTop: 25}}>
      <ShoppingCartTable />
      <Button title='Go Back To Store' onPress={() => navigation.goBack()} />
      
    </View>
  )
}
export default Cart;