import React from "react";

const CardProduct = props => {
	return (
		<div class="productCard">
			<h3 class="productName"></h3>
			<p class="productPrice"></p>
			<div class="card">
				<div
					style={{
						backgroundImage: `url(${props.photo})`,
						height: "100px",
						backgroundSize: "cover"
					}}
					class="card-img-top"
					alt="Foto del rellotge"
				></div>
				<div class="card-body">
					<h5 class="card-title">{props.name}</h5>
					<h3 class="h5 text-info">{props.category}</h3>
					<p class="card-text">{props.price}</p>
					<a href="#" class="btn btn-primary">
						Comprar
					</a>
				</div>
			</div>
		</div>
	);
};
export default CardProduct;
