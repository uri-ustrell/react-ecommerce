import React from "react";

const CardsFilter = props => {
	return (
		<div className="cardsFilter">
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<label
						className="input-group-text"
						htmlFor="selectCardsCategory"
					>
						Categories
					</label>
				</div>
				<select
					className="custom-select"
					id="selectCardsCategory"
					onChange={props.onFilterChange}
				>
					<option value="">filtra per tipus...</option>
					{props.categories.map(category => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<label
						className="input-group-text"
						htmlFor="orderCardsByPrice"
					>
						Options
					</label>
				</div>
				<select
					className="custom-select"
					id="orderCardsByPrice"
					onChange={props.onFilterChange}
				>
					<option value="">Ordena per preu...</option>
					<option value="asc">de menys a més</option>
					<option value="desc">de més a menys</option>
				</select>
			</div>
		</div>
	);
};

export default CardsFilter;
