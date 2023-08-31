import {BASE_URL, URL} from '@env'
import axios from 'axios'
import {getAsyncStorage, setAsyncStorage} from '../services'
import {URL_REFRESH_TOKEN} from '../constants'
import {Token} from '../enum'

export const axiosApi = axios.create({
	baseURL: `${BASE_URL}${URL}`,

	headers: {
		'Content-Type': 'application/json',
	},
})

axiosApi.interceptors.request.use(
	async (config) => {
		const token = await getAsyncStorage(Token.access)

		if (token && config.headers) {
			console.log(token)

			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	(error) => Promise.reject(error)
)

axiosApi.interceptors.response.use(
	(response) => response,
	async (error) => {
		const refresh = await getAsyncStorage(Token.refresh)

		const originalRequest = error.config

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true

			try {
				const response = await axios.post(URL_REFRESH_TOKEN, {refresh})
				const {access} = response.data

				setAsyncStorage(Token.access, access).then()

				originalRequest.headers.Authorization = `Bearer ${access}`

				return axios(originalRequest)
			} catch (error) {
				console.log(error)
			}
		}

		return Promise.reject(error)
	}
)
