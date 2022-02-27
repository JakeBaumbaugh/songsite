import logo from './logo.svg';
import './error.css';

type ErrorProp = {
	message?: string;
}

export default function ErrorPage(props:ErrorProp) {
	return <main className="error">
		<header className="error-header">
			<img src={logo} className="error-logo" alt="logo" />
			<p>{props.message || "This page does not exist yet."}</p>
		</header>
	</main>;
}