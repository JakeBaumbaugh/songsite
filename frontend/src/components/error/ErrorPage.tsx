import logo from './logo.svg';
import './error.css';

type ErrorProp = {
	message?: string;
}

export default function ErrorPage(props:ErrorProp) {
	return <div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>{props.message || "This page does not exist yet."}</p>
		</header>
	</div>;
}