import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Step1 } from './Step1'


const Step2 = () => <>Step2</>
const Step3 = () => <>Step3</>
const Result = () => <>Result</>

function App() {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route exact path='/' element={<Step1 />} />
					<Route exact path='/step2' element={<Step2 />} />
					<Route exact path='/step3' element={<Step3 />} />
					<Route exact path='/result' element={<Result />} />
				</Routes>
			</Router>
		</>
	)
}

export default App;
