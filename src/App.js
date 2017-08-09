import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';

import SearchDev from './components/SearchDev';

const DATA = [
	{
		id: 1,
		uri: 'http://www.codingnaked.com/content/public/upload/famaleprogramme_0_o.jpg',
		name: 'Clara Smith',
		skill: 'Django',
		sex: 'F'
	},
	{
		id: 2,
		uri: 'https://i.ytimg.com/vi/_UMKf3SgsC8/hqdefault.jpg',
		name: 'John Harper',
		skill: 'Python',
		sex: 'M'
	},
	{
		id: 3,
		uri: 'https://jewishpaedophilia.files.wordpress.com/2015/03/alexjones666.jpg?w=631&h=415',
		name: 'Sagar Shah',
		skill: 'Django',
		sex: 'M'
	},
	{ id: 4, uri: 'https://i.ytimg.com/vi/YZL3axcwDz8/hqdefault.jpg', name: 'Bob Thomas', skill: 'React', sex: 'M' },
	{
		id: 5,
		uri: 'http://aa.com.tr/uploads/Contents/2016/03/26/thumbs_b_c_028240d2d7371e522c9df64c274e6e7e.jpg',
		name: 'Sophie Laura',
		skill: 'React',
		sex: 'F'
	},
	{
		id: 6,
		uri: 'http://www.sekretaerinnen-briefe.de/wp-content/themes/wpremix3/images/sekretaerin.jpg',
		name: 'Sammie Lopez',
		skill: 'Django',
		sex: 'F'
	},
	{
		id: 7,
		uri: 'http://www.japantimes.co.jp/wp-content/uploads/2016/06/n-programming-a-20160611.jpg',
		name: 'Connie Jones',
		skill: 'Django',
		sex: 'F'
	},
	{
		id: 8,
		uri: 'http://www.aauw.org/files/2015/04/woman-programmer-at-computer-600.320.jpg',
		name: 'Camille Rowe',
		skill: 'Django',
		sex: 'F'
	},
	{
		id: 9,
		uri: 'http://4.bp.blogspot.com/-fLAkxo88E8E/T5jyhNJye1I/AAAAAAAAAeA/_AsXvpO8itA/s1600/cwh1.jpg',
		name: 'Joana Silver',
		skill: 'Python',
		sex: 'F'
	},
	{
		id: 10,
		uri: 'http://technopeda.net/wp-content/uploads/2015/03/Hispanic-Woman-breakfast-computer.jpg',
		name: 'Sasha Doe',
		skill: 'Django',
		sex: 'F'
	},
	{
		id: 11,
		uri: 'https://novakdjokovicfoundation.org/wp-content/uploads/2014/12/digital-editor-in-front-of-a-computer.jpg',
		name: 'Gaby Simone',
		skill: 'React',
		sex: 'F'
	},
	{
		id: 12,
		uri: 'https://ca.slack-edge.com/T60MRSSBG-U5ZHKLC7K-56f1c814456d-512',
		name: 'Chloe Isabella',
		skill: 'React',
		sex: 'F'
	},
];

class App extends Component {
	renderCard (item) {
		return (
			<Card
				key={item.id}
				image={{ uri: item.uri }}
				title={`${item.name} (${item.sex})`}
			>
				<Text style={{ margin: 10, textAlign:'center' }}>
					My skill is {item.skill}
				</Text>
				<Button
					onPress={()=> {}}
					backgroundColor='#03A9F4'
					title='VIEW NOW!!!'
				/>
			</Card>
		)
	}

	render () {
		return (
			<View>
				<SearchDev
					data={DATA}
					renderCard={this.renderCard}
				/>
			</View>
		)
	}
}

export default App;