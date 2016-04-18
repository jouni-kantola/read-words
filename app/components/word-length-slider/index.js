'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    SliderIOS
} from 'react-native';

export default class WordLengthSlider extends Component {
    constructor() {
        super();
        this.state = {
            value: 0

        }
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.value}
                </Text>
                <SliderIOS
                    {...this.props}
                    onValueChange={value => {
                        this.setState({ value: value });
                        this.props.onChanged( value );
                    }}
                    style={styles.slider} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slider: {
        height: 10,
        margin: 10,
        width: 300
    }
});