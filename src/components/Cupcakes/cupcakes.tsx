import React from "react";
import CupcakeCard from "./cupcakesCard";
import "./cupcakes.css";

interface Cupcake {
	id: number;
	name: string;
	description: string;
	price: string;
}

const cupcakesData: Cupcake[] = [
	{
		id: 1,
		name: "Chocolate Delight",
		description: "Rich chocolate flavor",
		price: "$3.00",
	},
	{
		id: 2,
		name: "Vanilla Bliss",
		description: "Classic vanilla taste",
		price: "$2.50",
	},
	// Add more cupcakes as needed
];

const Cupcakes: React.FC = () => {
	return (
		<div>
			<h1>Cupcakes</h1>
			<div>
				{cupcakesData.map((cupcake) => (
					<CupcakeCard key={cupcake.id} cupcake={cupcake} />
				))}
			</div>
		</div>
	);
};

export default Cupcakes;
