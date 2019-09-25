import React from "react";
import CardsWrapper from "../cardsContainer/cardsWrapper";
import store from "../../api/store.json";

const HomePage = () => {
	return (
		<>
			<h1>Populetic E-commerce</h1>
			<CardsWrapper products={store.products} />
		</>
	);
};

export default HomePage;
