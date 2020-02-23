import React from "react";

const CollectionPreview = ({ id, title, items }) => (
	<div>
		<h1>{title}</h1>
		{items
			.filter((item, index) => index < 4)
			.map(item => (
				<div key={item.id}>{item.name}</div>
			))}
	</div>
);

export default CollectionPreview;
