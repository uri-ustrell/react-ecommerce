import React from "react";

const CardProduct = props => {
	return (
		<div class="productCard">
			<h3 class="productName">{props.name}</h3>
			<p class="productPrice">{props.price}</p>
		</div>
	);
};
export default CardProduct;
