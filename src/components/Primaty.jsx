import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0, 2),

	}
}))

export const Primaty = ({ children, props }) => {
	const styles = useStyles()

	return (
		<Button type='submit' className={styles.root} fullWidth color='primary' {...props}>
			{children}
		</Button>
	)
}