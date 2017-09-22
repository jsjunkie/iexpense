import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsButton: {
  	height: 10, 
  	width: 60, 
  	position: 'absolute', 
  	top: 20, 
  	left: 0
  },
  numberInput: {
    height:60, 
    width: 300, 
    fontSize: 24, 
    padding: 10, 
    marginBottom: 10, 
    borderBottomColor: 'white',
    color: 'white',
  },
  textInput: {
    height:60, 
    width: 300, 
    fontSize: 24, 
    padding: 10, 
    marginBottom: 10,
    borderBottomColor: 'white',
    color: 'white',
  },
});