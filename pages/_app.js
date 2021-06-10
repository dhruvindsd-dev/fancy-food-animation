import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preload" as="image" href="pizza.png" />
				<link rel="preload" as="image" href="emoji.svg" />
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
