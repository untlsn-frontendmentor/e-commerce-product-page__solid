// @refresh reload
import { Links, Meta, Routes, Scripts } from 'solid-start/root';

export default () => {
	return (
		<html lang='en'>
			<head>
				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel="icon" href="data:," />
				<Meta />
				<Links />
			</head>
			<body class='antialiased'>
				<Routes />
				<Scripts />
			</body>
		</html>
	);
};
