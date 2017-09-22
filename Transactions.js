import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './Styles';
import Options from './Options';

export default class Transactions extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Transactions'
	}
	render () {
		return (<View style={styles.container}>
			<Options press={() => this.props.navigation.navigate('DrawerOpen')}/>
			<Text>Transactions</Text>
			
		</View>)
	}
}