import "../styles/index.scss";

import Recipes from "./Recipes";

const App = () => {
	return (
		<>
			<section className="hero">
				<main>
					<section>
						<h1>Oh, hai react</h1>
					</section>
				</main>

				<Recipes />
			</section>
		</>
	);
};

export default App;
