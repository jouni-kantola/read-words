import React, {
  AppRegistry,
  Component,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import words from './services/words';

import Chrome from './components/chrome';

export default class App extends Component {

  render() {
    return (
      <Provider store={store(words)}>
        <Chrome />
      </Provider>
    );
  }
}