import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const BookListItem = ({book, onAddedToCart}) => {
  const {title, author, price, coverImage} = book;
  return (
    <View style={styles.container}>
      <View style={styles.image}>{coverImage}</View>
      <View style={styles.text}>
        <Text style={styles.textone}>{author}</Text>
        <Text style={styles.texttwo}>{title}</Text>
        <Text style={styles.texttwo}>${price}</Text>
        <TouchableOpacity onPress={onAddedToCart}>
          <Text style={{marginTop: 7, fontSize: 16, color: 'green'}}>Add to Cart</Text>
        </TouchableOpacity>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    
  },
  text: {
    marginTop: 20
  },
  textone: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 7,
    marginTop: 20,
  },
  texttwo: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 15,
  },
  image: {
    margin: 15
  },
});

export default BookListItem;
