import React from 'react';
import { View, Button } from 'react-native';
import { styles } from './Styles'

export default class Options extends React.Component {
	render () {
		return (
			<View style={styles.optionsButton}>
				<Button
					onPress={() => this.props.press()}
					title="Options">
				</Button>
			</View>
			)
	}
}