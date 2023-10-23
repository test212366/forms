import { Input, Typography } from "@material-ui/core"
import { Form } from "./components/Form"
import { MainContainer } from "./components/MainContainer"
import { Primaty } from "./components/Primaty"

import { useForm } from "react-hook-form";

export const Step1 = () => {
	const { register, handlerSubmit, errors } = useForm({
		mode: 'onBlur'
	})

	return (
		<MainContainer>
			<Typography component='h2' variant='h5'>
				step 1
			</Typography>
			<Form>
				<Input ref={register} id='firstName' label='first' name='firstNAme' />
				<Input ref={register} id='lastName' label='last' name='lastNAme' />
				<Primaty>Next</Primaty>
			</Form>
		</MainContainer>
	)
}