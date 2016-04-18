import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';
import Word from '../word';

export default class WordCarousel extends Component {
    render() {
        const {words} = this.props;
        const visibleWords = words.filter(w => !w.filtered);
        const word = visibleWords[0];
        return (
            <View>
                <Word text={word.displayValue} />
            </View>
        );
    }
}

WordCarousel.propTypes = {
    words: React.PropTypes.arrayOf(React.PropTypes.string)
};

WordCarousel.defaultProps = {
    words: []
};

const styles = StyleSheet.create({});