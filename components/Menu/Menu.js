import { motion, useViewportScroll } from "framer-motion";
import React, { useRef } from "react";
import UseRotateInView from "../../hooks/rotateInView";
import Styles from "./index.module.scss";

const menu__data = [
	{
		name: "Bowl Of Veggie's",
		price: 25,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni, maiores consequatur ea illo perferendis quasi culpa fugiat ut aspernatur vero nam nihil dolor laudantium obcaecati porro laborum repellendus aliquam!",
		img: "/food1.png",
	},
	{
		name: "Exotic Veggie's",
		price: 32,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni, maiores consequatur ea illo perferendis quasi culpa fugiat ut aspernatur vero nam nihil dolor laudantium obcaecati porro laborum repellendus aliquam!",
		img: "/food2.png",
	},
	{
		name: "Pizza",
		price: 10,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni, maiores consequatur ea illo perferendis quasi culpa fugiat ut aspernatur vero nam nihil dolor laudantium obcaecati porro laborum repellendus aliquam!",
		img: "/pizza.png",
	},
	{
		name: "Ramen",
		price: 100,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni, maiores consequatur ea illo perferendis quasi culpa fugiat ut aspernatur vero nam nihil dolor laudantium obcaecati porro laborum repellendus aliquam!",
		img: "/food.png",
	},
];
function Menu() {
	const { scrollY } = useViewportScroll();
	const ref = useRef(null);
	const y = UseRotateInView(scrollY, ref);
	return (
		<div className={`${Styles.container} section`}>
			<div ref={ref} className="columns is-multiline">
				{menu__data.map((props) => (
					<Item key={props.name} {...props} y={y} />
				))}
			</div>
		</div>
	);
}

export default Menu;

const Item = ({ name, price, description, img, y }) => (
	<div className="column is-6 my-4">
		<div>
			<div className="columns">
				<div className="column is-3">
					<figure className="is-flex is-justify-content-center">
						<motion.img
							style={{ rotateZ: y }}
							className={Styles.image}
							src={img}
							alt=""
						/>
					</figure>
				</div>
				<div className="column pt-6">
					<div className="is-flex is-align-items-center is-justify-content-space-between">
						<p className="is-size-2 is-size-3-mobile has-text-weight-bold is-underlined mb-3 fast__text">
							{name}
						</p>
						<div
							className={`is-flex-grow-1 is-hidden-mobile ${Styles.menu__line}`}></div>
						<div className=" is-size-4 mr-6 has-gradient-text">${price}</div>
					</div>

					<p className="l__opacity is-size-5">{description}</p>
					<br />
				</div>
			</div>
		</div>
	</div>
);
