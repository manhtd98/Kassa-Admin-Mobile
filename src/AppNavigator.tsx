import {Auth} from './screens'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'

const Stack = createNativeStackNavigator()

const screenAuthOptions = {
	headerShown: false,
}

function AppNavigator() {
	return (
		<NavigationContainer fallback='loading...'>
			<Stack.Navigator
				initialRouteName='Auth'
				screenOptions={screenAuthOptions}
			>
				<Stack.Screen
					name='Auth'
					component={Auth}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
