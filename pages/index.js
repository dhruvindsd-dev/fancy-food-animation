import { FaLinkedin } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Nav from "../components/Nav/Nav";

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
			<Menu />
			<footer className="footer has-text-centered has-text-white has-background-black-bis mt-6 mb-0">
				<div className="buttons is-centered">
					<a
						href="https://github.com/dhruvindsd-dev"
						target="noreferrer"
						className="button is-light">
						<span className="icon is-large">
							<VscGithubAlt />
						</span>
					</a>
					<a
						href="https://www.linkedin.com/in/dhruvin-deshpande"
						target="noreferrer"
						className="button is-light">
						<span className="icon is-large">
							<FaLinkedin />
						</span>
					</a>
				</div>
				<p>Created By Dhruvin</p>
				<p>Contact me </p>
				<a href="mailto:dhruvinddev@gmail.com">dhruvinddev@gmail.com</a>
			</footer>
		</>
	);
}
