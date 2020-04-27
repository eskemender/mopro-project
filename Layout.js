import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Layout Component</Text>
			<Text style={[styles.textStyle, styles.redTextStyle]}>This text is red</Text>
			<View style={styles.box1}></View>
			<View style={styles.box2}></View>
			<View style={styles.box3}></View>
		</View>
		)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'stretch'
	},
	textStyle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'blue'
	},
	redTextStyle: {
		color: 'red'
	},
	box1:{
		height: 50,
		backgroundColor: 'royalblue'
	},
	box2:{
		width: 50,
		height: 50,
		backgroundColor: 'peru'
	},
	box3:{
		width: 50,
		height: 50,
		backgroundColor: 'greenyellow'
	},
})

export default Layout;