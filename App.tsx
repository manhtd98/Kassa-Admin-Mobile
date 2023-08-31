import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Test from './src/Test'
import Test1 from './src/Test1'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={Test}
					/>

					<Stack.Screen
						name='Details'
						component={Test1}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</QueryClientProvider>
	)
}

export default App
