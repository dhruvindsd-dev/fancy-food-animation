import { useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function useParallax(ref, scrollY, yOffset = 100, triggerTop = 0) {
	const [ElementScrollingPosition, setElementScrollingPosition] = useState([
		0, 0,
	]);
	useEffect(() => {
		if (!ref.current || typeof window == "undefined") return null;
		const setValues = () => {
			const top = ref.current.offsetTop;
			const elementHeight = ref.current.clientHeight;
			const yRange = [top, top + elementHeight];
			console.log("y range of parallax", yRange);
			setElementScrollingPosition(yRange);
		};

		setValues();
		document.addEventListener("load", setValues);
		window.addEventListener("resize", setValues);

		return () => {
			document.removeEventListener("load", setValues);
			window.removeEventListener("resize", setValues);
		};
	}, [ref]);

	const y = useTransform(scrollY, ElementScrollingPosition, [0, -yOffset]);
	return y;
}

export default useParallax;
