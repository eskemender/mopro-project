import React from 'react';
import { View, Text, FlatList } from 'react-native';

class List extends React.Component{
	constructor(){
		super();
		this.state={
			student: [
			{
				id: 1,
				name: 'John',
				faculty: 'Computer Science',
			},
			{
				id: 2,
				name: 'Jane',
				faculty: 'Computer Science',
			},{
				id: 3,
				name: 'Bob',
				faculty: 'Nurse',
			},{
				id: 4,
				name: 'Mike',
				faculty: 'Economy',
			}
			],

			refreshing: false
		}
	}

	onRefresh = () => {
		this.setState({ refreshing: true})
		const data = this.state.student.concat({id: 5, name: 'Jordan', faculty: 'Business'})
		this.setState({
			refreshing: false,
			student: data
		})
	}

	renderItem= ({item}) => (
		<View style={{ padding:20, borderBottomWidth:1, borderBottomColor: '#000'}}>
		<Text>{item.name}</Text>
		<Text>{item.faculty}</Text>
		</View>
		)

	render(){

			return (
			<View>
				<FlatList
					data={this.state.student}
					keyExtractor={item => item.id.toString()}
					renderItem={this.renderItem}
					refreshing={this.state.refreshing}
					onRefresh={this.onRefresh}

				/>
			</View>
			)
	}
}

export default List;