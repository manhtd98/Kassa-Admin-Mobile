import {Control, FieldName, RegisterOptions} from 'react-hook-form'

export type FormArrayProps<F extends Object, TControl extends Control = Control> = {
	name: FieldName<F>
	control?: TControl
	placeholder?: string
	rules?: Pick<RegisterOptions<F>, 'maxLength' | 'minLength' | 'validate' | 'required'>
}
