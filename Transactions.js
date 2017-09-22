import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './Styles';

export default class Transactions extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Transactions'
	}
	render () {
		return (<View style={styles.container}>
			<View style={styles.optionsButton}>
				<Button
					onPress={() => this.props.navigation.navigate('DrawerOpen')}
					title="Options">
				</Button>
			</View>
			<Text>Transactions</Text>
			
		</View>)
	}
}