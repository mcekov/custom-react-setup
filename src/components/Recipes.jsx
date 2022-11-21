import { useState } from "react";

const tRecipe = {
	summonTBook: 1,
	agility: 15,
	strength: 22,
	tMoonStone: 1,
};

const multiTRecipe = {
	...tRecipe,
	slimeResist: -3,
	tMoonStone: 2,
};

console.log(tRecipe);
console.log(multiTRecipe);

const Recipes = () => {
	const [recipe, setRecipe] = useState({});

	return (
		<div>
			<h3>Current Recipe:</h3>
			<button onClick={() => setRecipe(tRecipe)}>tRecipe</button>
			<button onClick={() => setRecipe(multiTRecipe)}>multiTRecipe</button>

			<ul>
				{Object.keys(recipe).map((material, idx) => (
					<li key={idx}>
						{material}: {recipe[material]}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Recipes;
