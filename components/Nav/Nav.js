import { motion } from "framer-motion";
import React from "react";
import { useIsTablet } from "../../hooks/useIsMobile";
import Styles from "./index.module.scss";

const nav_brand = {
	initial: { opacity: 0, x: -100 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 0.8,
			delay: 1.5,
		},
	},
};
const mask = {
	animate: { width: 0, transition: { duration: 0.8, delay: 2 } },
};

const login = {
	initial: { opacity: 0, x: -100 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 0.8,
			delay: 2.5,
		},
	},
};
function Nav() {
	const isTablet = useIsTablet();
	return (
		<motion.nav
			initial="initial"
			animate="animate"
			exit="exit"
			className={`navbar is-fixed-top  ${Styles.container}`}
			style={{ backgroundColor: "transparent" }}>
			<div className="navbar-brand">
				<div className="navbar-item is-size-3 button fast__text has-text-weight-semibold is-transparent">
					<motion.div variants={nav_brand}>Tired</motion.div>
				</div>
				<div
					className={`navbar-burger is-hidden-tablet ${Styles.mobile__navbar__brand}`}>
					<motion.div variants={login} className="button is-translucent">
						Login
					</motion.div>
				</div>
			</div>
			<div className="navbar-menu">
				<div className="navbar-item">
					<div className={Styles.spacer}>
						<motion.div variants={mask} className={Styles.mask}></motion.div>
					</div>
				</div>
				<div className="navbar-item">
					<motion.div variants={login} className="button is-translucent">
						Login
					</motion.div>
				</div>
			</div>
		</motion.nav>
	);
}

export default Nav;
