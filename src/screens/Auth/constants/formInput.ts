import {FormArrayProps} from '../../../models'
import {LoginInputField} from '../models'

export const DEFAULT_VALUE = {username: '', password: ''}

export const INPUT_FIELD: FormArrayProps<LoginInputField>[] = [
	{
		rules: {
			required: 'Vui lòng nhập tên đăng nhập',
		},
		placeholder: 'Nhập tên',
		name: 'username',
	},

	{
		rules: {
			required: 'Vui lòng nhập mật khẩu',
		},
		placeholder: 'Nhập mật khẩu',
		name: 'password',
	},
]
