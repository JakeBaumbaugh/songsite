import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error/ErrorPage";
import HomePage from "./components/home/HomePage";
import PageLayout from "./components/layout/PageLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageLayout/>}>
					<Route index element={<HomePage/>}/>
					<Route path="*" element={<ErrorPage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
