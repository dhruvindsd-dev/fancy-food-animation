import { useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const UseRotateInView = (scrollY, ref, threshold = 1) => {
	const [ElementScrollingPosition, setElementScrollingPosition] = useState([
		0, 0,
	]);
	useEffect(() => {
		if (!ref.current || typeof window == "undefined") return null;
		const setValues = () => {
			//

			const screenHeight = window.innerHeight;
			const top = ref.current.getBoundingClientRect().top % screenHeight;
			const elementHeight = ref.current.clientHeight;
			const yRange = [top, top + screenHeight + elementHeight];
			console.log(yRange);
			setElementScrollingPosition(yRange);
		};

		setValues();
		document.addEventListener("load", setValues);

		return () => {
			document.removeEventListener("load", setValues);
		};
	}, []);

	const y = useTransform(scrollY, ElementScrollingPosition, [
		0,
		360 * threshold,
	]);
	return y;
};

export default UseRotateInView;
