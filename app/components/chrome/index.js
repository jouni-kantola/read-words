import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions";

import CharCaseSwitch from '../char-case-switch';
import WordCarousel from '../word-carousel';

class Chrome extends Component {

  render() {
    const { words, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <View style={styles.container}>
        <CharCaseSwitch onChanged={actions.toggleCharCase} />
        <WordCarousel words={words} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default connect(state => state)(Chrome);