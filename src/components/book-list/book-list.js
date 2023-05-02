import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';

import  {withBookstoreService}  from "../hoc";
import { fetchBooks, bookAddedToCart }  from "../../actions";
import {View, Text} from 'react-native';
import { compose } from "redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <View>
    {
      books.map((book) => {
        return <Text key={book.id}><BookListItem 
          book={book} 
          onAddedToCart={() => onAddedToCart(book.id)}/></Text>
      })
    }
    </View>
  )
}

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if(loading) {
      return <Spinner />
    }
    if(error) {
      return <ErrorIndicator />
    }
    return <BookList books={books}
    onAddedToCart={onAddedToCart}
      />
  }
}

const mapStateToProps = ({bookList: { books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
 
    }
  }

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);