import {Text} from 'react-native'
import {axiosApi} from './api'
import {setAsyncStorage} from './services'
import {URL_TOKEN} from './constants'

function Test() {
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

	return <Text>Detail</Text>
}

export default Test
