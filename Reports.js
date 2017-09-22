import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './Styles';

export default class Reports extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Reports'
	}
	render () {
		return (<View style={styles.container}>
			<Text>Reports</Text>
			<Button 
				onPress={() => this.props.navigation.navigate('DrawerOpen')}
				title="Open Drawer">
			</Button>
		</View>)
	}
}