import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
}))

export const MainContainer = ({ children, ...props }) => {
	const styles = useStyles()

	return (
		<Container container='main' className={styles.root} {...props} maxWidth='xs'>
			{children}
		</Container>
	)
}