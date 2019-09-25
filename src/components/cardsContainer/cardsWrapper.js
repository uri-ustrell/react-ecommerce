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

	const handleCategoryChange = products => {
		const categorySelected = document.querySelector("#selectCardsCategory")
			.value;
		const orderBy = document.querySelector("#orderCardsByPrice").value;

		if (categorySelected) {
			products = products.filter(
				prod => prod.category === categorySelected
			);
		}

		switch (orderBy) {
			case "asc":
				products = products.sort((a, b) => a.price - b.price);
				break;

			case "desc":
				products = products.sort((a, b) => b.price - a.price);

				break;
			default:
				break;
		}

		setProducts(() => [...products]);
	};

	const handleOrderByChange = products => {
		const orderBy = document.querySelector("#orderCardsByPrice").value;
		/* switch (orderBy) {
			case "asc":
				setProducts(() =>
					[...products].sort((a, b) => a.price - b.price)
				);
				break;
			case "desc":
				setProducts(() =>
					[...products].sort((a, b) => b.price - a.price)
				);
				break;
			default:
				setProducts(() => [...products]);
				break;
		} */
	};

	return (
		<>
			<CardsFilter
				categories={uniqueCategories()}
				onFilterChange={() => handleCategoryChange(props.products)}
			/>
			<div className="productCardsContainer">
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
