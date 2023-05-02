import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;
    return (
      <View key={id} style={styles.container2}>
        <Text>{idx + 1}</Text>
        <Text>{title}</Text>
        <Text>{count}</Text>
        <Text>{total}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => onIncrease(id)}>
            <Text style={{color: 'green', fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDecrease(id)}>
            <Text style={{color: 'coral', fontWeight: 'bold'}}> -</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(id)}>
            <Text style={{color: 'red', fontWeight: 'bold'}}> del</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 20}}>
        Your Order
      </Text>
      <View style={styles.container}>
        <Text style={styles.headtext}>#</Text>
        <Text style={styles.headtext}>Item</Text>
        <Text style={styles.headtext}>Count</Text>
        <Text style={styles.headtext}>Total</Text>
        <Text style={styles.headtext}>Action</Text>
      </View>
      <View>
      { items.map(renderRow) }
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          marginLeft: 220,
          marginTop: 10,
        }}>
        Total: ${total}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
  },
  headtext: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});

const mapStateToProps = ({ shoppingCart: {cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
