import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./index.module.scss";

const ease = [0.6, 0.01, 0, 0.95];

function ViewMenu({ onAnimationComplete }) {
	const ref = useRef(null);
	const [Y, setY] = useState(0);
	console.log("view menu rendering");
	// get the window inner height and take this component to the end- 50
	useEffect(() => {
		console.log(ref.current);

		if (typeof window !== "undefined") {
			const element_from_top =
				ref.current.getBoundingClientRect().top ||
				ref.current.getBoundingClientRect().y;
			const window_height = window.innerHeight;
			const rough_element_height = ref.current.offsetHeight;

			setY(window_height - element_from_top - rough_element_height);
		}
	}, []);

	return (
		<motion.div
			initial={{ scale: 0, x: "-50%" }}
			animate={{ scale: 1 }}
			transition={{ duration: 1.5, ease: ease, delay: 4 }}
			className={Styles.wrapper}>
			<motion.div
				animate={{
					width: "40px",
					height: "40px",
					// y: `${0}px`,
					bottom: 0,
				}}
				transition={{ duration: 2, ease: ease, delay: 5.6 }}
				className={Styles.main}>
				<div ref={ref} className="has-text-centered">
					<motion.div
						onAnimationComplete={onAnimationComplete}
						animate={{ scale: 0 }}
						transition={{ duration: 2, ease: ease, delay: 5.6 }}>
						View <br /> Menu
					</motion.div>
					<div className="icon is-small">
						<img src="/arrow.svg" alt="" />
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default ViewMenu;
