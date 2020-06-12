import Crop from './src/crop.js';
import Dimension from './src/dimension.js';
import Framing from './src/framing.js';
import Upload from './src/upload.js';

/* First Page Header Imports Start*/
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Foundation';
import {Badge} from 'react-native-elements';
/* First Page Header Imports End*/

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const Navigation = createStackNavigator(
{
	framing:
	{screen: Framing
		,navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#f9f9f9'},
      headerLeft: () => <Icons name="list" size={30} color="#2e465c" />,
      headerLeftContainerStyle: {width: '12%', alignItems: 'center'},
      title: 'What Are You Framing?',
      headerTitleAlign: 'center',
      headerTitleStyle: {color: '#2e465c', fontSize: 16},
      headerRight: () => <View><Icon name="shopping-basket" size={30} color="#2e465c" /><Badge textStyle = {{fontSize: 10}} badgeStyle = {{backgroundColor: '#2e465c', position: 'absolute', top: -10, right: -4}} value = '0'/></View>,
      headerRightContainerStyle: {width: '12%', alignItems: 'center'}
		})
	},
	upload:
	{screen: Upload
		,navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#f9f9f9'},
			title: 'Upload Your Image',
      headerTitleStyle: {color: '#2e465c', fontSize: 16},
      headerTitleAlign: 'center'
		})
	},
	crop:
	{screen: Crop
		,navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#f9f9f9'},
			title: 'Crop Your Image',
      headerTitleStyle: {color: '#2e465c', fontSize: 16},
      headerTitleAlign: 'center'
		})
	},
	dimension:
	{screen: Dimension
		,navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#f9f9f9'},
			title: 'Set The Dimension',
      headerTitleStyle: {color: '#2e465c', fontSize: 16},
      headerTitleAlign: 'center'
		})
	}
}
);

const App = createAppContainer(Navigation);

export default App;