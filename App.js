import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting';
import Input from './Input';
import Layout from './Layout';
import List from './List';

// class App extends Component {
//   state = {
//     greeting: 'Welcome'
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Greeting text={this.state.greeting} />
//         <Text>{this.state.greeting}</Text>
//         <Input />
//       </View>
//     )
//   }
// }

class App extends Component {
	constructor(){
		super();
		this.state = {
			greeting: 'Welcome to React Native'
		}
	}

	componentDidMount(){

	}

	render(){
		return(
			// <Layout />
			<List />
			)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;