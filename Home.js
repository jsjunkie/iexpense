import React from 'react';
import { Text, View, Button, TextInput, TouchableHighlight, Alert } from 'react-native';
import { styles } from './Styles';
import Options from './Options';

export default class Home extends React.Component {
	constructor () {
		super();

		this.state = {
			amount: '',
			category: ''
		}
	}

	static navigationOption = {
		drawerlabel: 'Home'
	}

	onPress = () => {
		Alert.alert("Amount: " + this.state.amount + " category: " + this.state.category);
	}
	render () {
		return (<View style={styles.container}>
					<Options press={() => this.props.navigation.navigate('DrawerOpen')}/>
					<View style={{alignItems: 'center'}}>
			          <Text style={{color: 'white', fontSize: 28, padding: 10}}>Add Expense</Text>
			          <TextInput  style={styles.numberInput}
			                      placeholder="amount.." 
			                      placeholderTextColor='white'
			                      keyboardType='numeric'
			                      value={this.state.amount}
			                      onChangeText={(amount) => this.setState({amount})}/>
			          <TextInput  style={styles.textInput}
			                      placeholder="category.."
			                      placeholderTextColor='white'
			                      value={this.state.category} 
			                      onChangeText={(category) => this.setState({category})}/>
			          <TouchableHighlight onPress={() => this.onPress()} >
			            <View style={{backgroundColor: 'white', width: 120, height: 65, padding: 10, borderRadius: 20, marginTop: 20}}>
			              <Text style={{fontSize: 30, textAlign: 'center'}}>Submit</Text>
			            </View>
			          </TouchableHighlight>
			      </View>
				</View>);
	}
}

