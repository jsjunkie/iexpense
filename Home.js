import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Styles';

export default class Home extends React.Component {
	static navigationOption = {
		drawerlabel: 'Home'
	}
	render () {
		return (<View style={styles.container}>
					<Text>Home</Text>
					<Button 
						onPress={() => this.props.navigation.navigate('DrawerOpen')}
						title="Open Drawer">
					</Button>
				</View>);
	}
}

