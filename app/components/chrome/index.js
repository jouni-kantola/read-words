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

import WordLengthSlider from '../word-length-slider';

class Chrome extends Component {

  render() {
    const { words, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <View style={styles.container}>
        <CharCaseSwitch onChanged={actions.toggleCharCase} />
        <WordLengthSlider minimumValue={1} maximumValue={4} step={1} onChanged={actions.filterWordLength} />
        <View>
          <WordCarousel words={words} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default connect(state => state)(Chrome);