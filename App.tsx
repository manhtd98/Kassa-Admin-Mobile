import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AppNavigator from './src/AppNavigator'
import {NativeBaseProvider} from 'native-base'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NativeBaseProvider>
				<AppNavigator />
			</NativeBaseProvider>
		</QueryClientProvider>
	)
}

export default App
