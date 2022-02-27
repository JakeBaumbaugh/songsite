import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error/ErrorPage";
import PageLayout from "./components/layout/PageLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageLayout/>}>
					<Route index element={<ErrorPage message="index route"/>}/>
					<Route path="test" element={<ErrorPage message="test route"/>}/>
					<Route path="*" element={<ErrorPage message="* route"/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
