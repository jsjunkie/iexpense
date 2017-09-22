import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './Styles';

export default class Transactions extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Transactions'
	}
	render () {
		return (<View style={styles.container}>
			<Text>Transactions</Text>
			<Button 
				onPress={() => this.props.navigation.navigate('DrawerOpen')}
				title="Open Drawer">
			</Button>
		</View>)
	}
}