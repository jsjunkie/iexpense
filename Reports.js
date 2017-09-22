import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './Styles';
import Options from './Options';

export default class Reports extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Reports'
	}
	render () {
		return (<View style={styles.container}>
			<Options press={() => this.props.navigation.navigate('DrawerOpen')}/>
			<Text>Reports</Text>
		</View>)
	}
}