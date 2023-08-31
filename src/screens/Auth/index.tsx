import {SafeAreaView, StyleSheet} from 'react-native'
import {Controller, useForm} from 'react-hook-form'
import {DEFAULT_VALUE, DESC_LOGIN, INPUT_FIELD, TITLE_LOGIN} from './constants'
import {LoginInputField} from './models'
import {
	Actionsheet,
	Button,
	Fab,
	Heading,
	Image,
	Input,
	Pressable,
	Stack,
	Text,
	useDisclose,
} from 'native-base'
import {Fragment, useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export function Auth() {
	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<LoginInputField>({
		defaultValues: DEFAULT_VALUE,
	})

	const [showPassword, setShowPassword] = useState(false)

	const {isOpen, onOpen, onClose} = useDisclose()
	const onSubmit = (data) => console.log(data)

	return (
		<SafeAreaView style={styles.container}>
			<Stack space={4}>
				<Stack
					space={2}
					w='100%'
					paddingBottom={3}
					alignItems='center'
				>
					<Image
						size='2xl'
						resizeMode='contain'
						alt='logo'
						source={require('../../assets/images/logo.png')}
					/>

					<Heading
						size='2xl'
						color='#337ab7'
					>
						{TITLE_LOGIN}
					</Heading>

					<Text
						fontSize='xl'
						color='#d8534e'
					>
						{DESC_LOGIN}
					</Text>
				</Stack>

				<Stack
					space={3}
					w='100%'
				>
					{INPUT_FIELD.map((input) => (
						<Fragment key={input.name}>
							<Controller
								key={input.name}
								control={control}
								rules={input.rules}
								render={({field: {onChange, onBlur, value}}) => (
									<Input
										placeholder={input.placeholder}
										onBlur={onBlur}
										onChangeText={onChange}
										isInvalid={!!errors[input.name]?.message}
										value={value}
										InputLeftElement={
											input.name !== 'password' ? (
												<Icon
													style={{
														paddingLeft: 7,
													}}
													name='user-alt'
													color='#8d8d8d'
													size={20}
												/>
											) : (
												<MaterialIcons
													style={{
														paddingLeft: 7,
													}}
													color='#8d8d8d'
													name='onepassword'
													size={20}
												/>
											)
										}
										size='xl'
										type={
											input.name === 'password' && !showPassword ? 'password' : 'text'
										}
										ml='4'
										mr='4'
										InputRightElement={
											input.name === 'password' ? (
												<Pressable onPress={() => setShowPassword(!showPassword)}>
													{!showPassword ? (
														<Icon
															style={{
																paddingRight: 7,
															}}
															color='#8d8d8d'
															name='lock'
															size={20}
														/>
													) : (
														<Icon
															style={{
																paddingRight: 7,
															}}
															color='#8d8d8d'
															name='unlock-alt'
															size={20}
														/>
													)}
												</Pressable>
											) : undefined
										}
									/>
								)}
								name={input.name}
							/>

							{errors[input.name] && (
								<Stack
									paddingLeft={5}
									direction='row'
									space={2}
								>
									<Icon
										name='info-circle'
										size={18}
										color='#d8534e'
									/>
									<Text color='#d8534e'>{errors[input.name]?.message}</Text>
								</Stack>
							)}
						</Fragment>
					))}
				</Stack>

				<Stack
					space={2}
					alignItems='center'
				>
					<Text
						fontSize='sm'
						color='#337ab7'
					>
						Quên mật khẩu
					</Text>

					<Button
						marginTop={5}
						backgroundColor='#337ab7'
						width={200}
						leftIcon={
							<MaterialIcons
								name='login-variant'
								size={20}
								color='#ffff'
							/>
						}
						onPress={handleSubmit(onSubmit)}
					>
						Đăng nhập
					</Button>
				</Stack>
			</Stack>

			<Actionsheet
				isOpen={isOpen}
				onClose={onClose}
			>
				<Actionsheet.Content>
					<Actionsheet.Item>Tiếng Việt</Actionsheet.Item>
					<Actionsheet.Item>Zh/Chinese</Actionsheet.Item>
					<Actionsheet.Item>English</Actionsheet.Item>
				</Actionsheet.Content>
			</Actionsheet>

			<Fab
				onPress={onOpen}
				renderInPortal={false}
				shadow={0}
				size='ms'
				backgroundColor='#337ab7'
				bottom={30}
				right={5}
				icon={
					<Image
						resizeMode='contain'
						source={require('../../assets/images/vietnam.png')}
					/>
				}
				label='Tiếng việt'
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		// marginTop: 70,
	},

	logo: {
		width: 200,
		// height: 200,
		// margin: 'auto',
		resizeMode: 'contain',
	},
})
