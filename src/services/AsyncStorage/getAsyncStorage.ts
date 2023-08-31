import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getAsyncStorage(itemName: string) {
	try {
		const result = await AsyncStorage.getItem(itemName)

		return result
	} catch (err) {
		console.log(err)
	}
}
