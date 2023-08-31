import {Button} from 'react-native'
import {axiosApi} from './api'
import {getAsyncStorage, setAsyncStorage} from './services'
import {Fragment} from 'react'
import {URL_TOKEN} from './constants'

function Test({navigation}) {
	// const {data, isSuccess} = useQuery({
	// 	queryKey: ['test'],
	// 	queryFn: fetchProfile,
	// })

	// console.log(data)

	const handleSubmit = async () => {
		try {
			const response = await axiosApi.post(URL_TOKEN, {
				username: 'risenvn',
				password: 'risenvn',
			})
			const {access, refresh} = response.data

			setAsyncStorage('AccessToken', access).then()

			setAsyncStorage('RefreshToken', refresh).then()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Fragment>
			<Button
				title='leoo'
				onPress={handleSubmit}
			/>

			<Button
				title='leoo2'
				onPress={async () => {
					const token = await getAsyncStorage('RefreshToken')

					console.log(token)
				}}
			/>

			<Button
				title='Go to Details'
				onPress={() => navigation.navigate('Details')}
			/>
		</Fragment>
	)
}

export default Test
