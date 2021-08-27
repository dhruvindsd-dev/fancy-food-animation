import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}
	}, []);
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
			<Component {...pageProps} />
		</>
	);
}

export default dynamic(() => Promise.resolve(MyApp), {
	ssr: false,
});
