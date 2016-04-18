import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';
import Word from '../word';

export default class WordCarousel extends Component {
    render() {
        const {words} = this.props;
        const word = words[0];
        return (
            <View>
                <Word text={word} />
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