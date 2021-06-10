import { motion } from "framer-motion";
import React from "react";

function Waves() {
	return (
		<svg
			width="854"
			height="854"
			viewBox="0 0 854 854"
			fill="none"
			opacity="0.3"
			xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_bf)">
				<motion.path
					initial={{
						pathLength: 0,
						pathOffset: 0.4,
					}}
					animate={{
						pathLength: 1,
						pathOffset: 0,
					}}
					transition={{ duration: 5 }}
					d="M616.411 59.5305C580.511 4.0138 474.508 -12.3438 441.761 14.9189C411.44 35.9855 381.119 59.5305 331.392 23.5934C281.665 -12.3438 205.256 48.3776 207.681 84.3148C210.107 120.252 165.232 164.864 113.079 172.299C60.9268 179.734 8.7743 252.848 41.5212 309.852C74.2681 366.855 45.1598 418.902 25.7542 470.949C6.34861 522.996 -36.1011 607.263 80.3324 645.678C196.766 684.094 184.637 705.161 221.023 788.188C257.408 871.215 335.031 856.345 392.035 836.517C449.038 816.69 455.103 811.733 529.086 836.517C588.273 856.345 679.766 810.145 664.925 772.078C654.233 744.651 683.118 699.212 780.146 645.678C877.174 592.144 855.343 506.886 832.299 470.949C819.362 437.077 797.126 350.498 811.68 275.154C826.234 199.809 761.145 159.494 726.781 148.754C704.95 142.145 652.312 115.047 616.411 59.5305Z"
					stroke="#DADADA"
					stroke-opacity="0.68"
				/>
			</g>
			<defs>
				<filter
					id="filter0_bf"
					x="-4.5"
					y="-4.5"
					width="863"
					height="863"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImage" stdDeviation="3" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur"
						result="shape"
					/>
					<feGaussianBlur stdDeviation="0.5" result="effect2_foregroundBlur" />
				</filter>
			</defs>
		</svg>
	);
}

export default Waves;
