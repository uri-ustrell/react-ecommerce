import React, { useState } from "react";
import CardProduct from "./CardProduct";
import CardsFilter from "../commons/CardsFilter";

const CardsWrapper = props => {
	const [products, setProducts] = useState(props.products);

	const uniqueCategories = () => {
		const allCategories = props.products.reduce((categories, product) => {
			return [...categories, product.category];
		}, []);
		return [...new Set(allCategories)];
	};

	const onCategoryChange = () => {
		const categorySelected = document.querySelector("#selectCardsCategory")
			.value;
		console.log(categorySelected);
		if (categorySelected) {
			setProducts(() =>
				props.products.filter(
					prod => prod.category === categorySelected
				)
			);
		} else {
			setProducts(() => props.products);
		}
	};

	return (
		<>
			<CardsFilter
				categories={uniqueCategories()}
				onCategorySelect={onCategoryChange}
			/>
			<div class="productCardsContainer">
				{products.map(product => {
					return (
						<CardProduct
							name={product.name}
							price={product.price}
							photo={product.photo}
							category={product.category}
							key={product.name}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CardsWrapper;
