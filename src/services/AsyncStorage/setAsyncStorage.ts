import AsyncStorage from '@react-native-async-storage/async-storage'

export async function setAsyncStorage(itemName: string, value: any) {
	try {
		await AsyncStorage.setItem(itemName, value)

		return 'success'
	} catch (err) {
		console.log(err)
	}
}
