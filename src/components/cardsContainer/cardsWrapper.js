import React from "react";
import CardProduct from "./CardProduct";

const CardsWrapper = props => (
	<>
		<div class="productCardsContainer">
			{props.products.map(product => {
				return (
					<CardProduct
						name={product.name}
						price={product.price}
						photo={product.photo}
						category={product.category}
					/>
				);
			})}
		</div>
	</>
);

export default CardsWrapper;
