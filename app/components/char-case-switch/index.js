import React, {
    Component,
    StyleSheet,
    Switch
} from 'react-native';

export default class CharCaseSwitch extends Component {

    constructor() {
        super();
        this.state = {
            lowercase: false,
            charCase: 'uppercase'
        }
    }

    render() {
        return (
            <Switch
                onValueChange={value => {
                    this.props.onChanged({ lowercase: value, charCase: value ? 'lowercase' : 'uppercase' });
                    this.setState({ lowercase: value, charCase: value ? 'lowercase' : 'uppercase' });
                } }
                style={{ marginBottom: 10 }}
                value={this.state.lowercase} />
        );
    }
}