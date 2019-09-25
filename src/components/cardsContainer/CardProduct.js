import React from "react";

const CardProduct = props => {
	return (
		<div className="productCard">
			<h3 className="productName"></h3>
			<p className="productPrice"></p>
			<div className="card">
				<div
					style={{
						backgroundImage: `url(${props.photo})`,
						height: "100px",
						backgroundSize: "cover"
					}}
					className="card-img-top"
					alt="Foto del rellotge"
				></div>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<h3 className="h5 text-info">{props.category}</h3>
					<p className="card-text">{props.price}€</p>
					<a href="#" className="btn btn-primary">
						Comprar
					</a>
				</div>
			</div>
		</div>
	);
};
export default CardProduct;
