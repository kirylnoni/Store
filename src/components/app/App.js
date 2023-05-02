import * as React from "react";
import {Provider} from 'react-redux';
import ErrorBoundry from "../error-boundry";
import BookstoreService from "../../services/bookstore-service";
import { BookstoreServiceProvider } from "../bookstore-service.context";
import store from "../../store";
import StackNavigation from "../../navigation/stack-navigation";

const bookstoreService = new BookstoreService();

const App = () => {
  return (
    <Provider store={store}>
          <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
              <StackNavigation />
            </BookstoreServiceProvider>
          </ErrorBoundry>
        </Provider>
  )
}

export default App;