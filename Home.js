import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Styles';

export default class Home extends React.Component {
	static navigationOption = {
		drawerlabel: 'Home'
	}
	render () {
		return (<View style={styles.container}>
					<View style={styles.optionsButton}>
						<Button
							onPress={() => this.props.navigation.navigate('DrawerOpen')}
							title="Options">
						</Button>
					</View>
					<Text>Home</Text>
				</View>);
	}
}

