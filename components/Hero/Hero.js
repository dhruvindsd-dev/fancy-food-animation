import { motion } from "framer-motion";
import React from "react";
import Styles from "./index.module.scss";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Waves from "../Waves/Waves";
import Waves2 from "../Waves/Waves2";

const fast_text = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: { duration: 1 },
	},
};

const fast_text_nav_stagger = {
	animate: {
		transition: { delayChildren: 1.3, staggerChildren: 0.1 },
	},
};

const fast_text_nav = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 1 } },
};

const main_text = {
	initial: { opacity: 0, y: 400, rotate: 30 },
	animate: {
		y: 0,
		rotate: 0,
		opacity: 1,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 0.8,
		},
	},
};
const main_text_stagger = {
	animate: {
		transition: { delayChildren: 1, staggerChildren: 0.3 },
	},
};

const emoji = {
	initial: { opacity: 0, x: -100, rotate: -90 },
	animate: {
		rotate: 0,
		x: 0,
		opacity: 1,
		transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.8, delay: 2.7 },
	},
};
const main_button = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			ease: "linear",
			duration: 1,
			delay: 2.7,
		},
	},
};

const button_icon = {
	initial: { y: 80 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			delay: 3.2,
		},
	},
};
const button_text = {
	initial: { x: -150 },
	animate: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			delay: 3.5,
		},
	},
};
function Hero() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			className={`${Styles.hero} has-navbar-fixed-top`}>
			<div className={Styles.main__img__container}>
				<div style={{ position: "relative" }}>
					<motion.div
						animate={{
							backdropFilter: "blur(0px)",
							backgroundColor: "#00000000",
						}}
						transition={{ duration: 4.3 }}
						className={Styles.blur}></motion.div>
					<motion.img
						animate={{ rotate: 360 }}
						transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
						className={Styles.food}
						src="pizzabig.png"
						alt=""
					/>
				</div>
			</div>
			<div className={Styles.waves__img__1}>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						delay: 0.5,
						duration: 10,
						repeat: Infinity,
						ease: "linear",
					}}>
					<Waves />
				</motion.div>
			</div>
			<div className={Styles.waves__img__2}>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						delay: 0.5,
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}>
					<Waves2 />
				</motion.div>
			</div>
			<div className={Styles.main__container}>
				<div className="is-flex is-align-items-center">
					<motion.p
						variants={fast_text}
						className="has-text-weight-light is-size-1 has-text-grey-light fast__text">
						fast
					</motion.p>
					<motion.div variants={fast_text_nav_stagger} className={Styles.nav}>
						<motion.span
							variants={fast_text_nav}
							className="button is-dark has-gradient-text">
							Menu
						</motion.span>
						<motion.span
							variants={fast_text_nav}
							className="button is-dark has-gradient-text">
							Blog
						</motion.span>
						<motion.span
							variants={fast_text_nav}
							className="button is-dark has-gradient-text">
							About Us{" "}
						</motion.span>
					</motion.div>
					<br />
				</div>
				<motion.div variants={main_text_stagger}>
					<div className="is-clipped">
						<motion.p
							variants={main_text}
							className={`has-gradient-text ${Styles.banner__text} ${Styles.emoji__parent}`}>
							food{" "}
							<span className="image is-180x180 m-4 is-clipped">
								<motion.img variants={emoji} src="emoji.svg" alt="" />
							</span>
						</motion.p>
					</div>
					<div className="is-clipped">
						<motion.p
							variants={main_text}
							className={`has-gradient-text ${Styles.banner__text}`}>
							delivery
						</motion.p>
					</div>
				</motion.div>
				<br />
				<br />
				<div className="buttons">
					<motion.div
						variants={main_button}
						className={`button is-large is-outlined mr-5 ${Styles.custom__button}`}>
						<span className="icon is-clipped">
							<motion.span variants={button_icon} className="icon">
								<FaApple />
							</motion.span>
						</span>
						<div className={Styles.divider}></div>
						<span className="is-clipped">
							<motion.div variants={button_text}>App Store</motion.div>
						</span>
					</motion.div>
					<motion.div
						variants={main_button}
						className={`button is-large is-outlined mr-5 ${Styles.custom__button}`}>
						<span className="icon is-clipped">
							<motion.span variants={button_icon} className="icon">
								<FaGooglePlay />
							</motion.span>
						</span>
						<div className={Styles.divider}></div>
						<span className="is-clipped">
							<motion.div variants={button_text}>Google Play</motion.div>
						</span>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

export default Hero;
