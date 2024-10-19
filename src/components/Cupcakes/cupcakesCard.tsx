import React from "react";
import "./cupcakesCard.css";

interface CupcakeCardProps {
	name: string;
	description: string;
	price: string;
	imageUrl: string;
}

const CupcakeCard: React.FC<CupcakeCardProps> = (cupcake) => {
	return (
		<div className="cupcake-card">
			<img
				src={cupcake.imageUrl}
				alt={cupcake.name}
				className="cupcake-image"
			/>
			<h2>{cupcake.name}</h2>
			<p>{cupcake.description}</p>
			<p>{cupcake.price}</p>
		</div>
	);
};

export default CupcakeCard;
