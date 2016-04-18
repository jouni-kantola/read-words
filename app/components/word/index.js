import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Word extends Component {
  render() {
    const {text} = this.props;
    return (
      <Text style={styles.word}>
        {text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  word: {
      backgroundColor: 'gold',
      color: 'grey',
      fontWeight: 'bold',
      fontSize: 36
  }
});
