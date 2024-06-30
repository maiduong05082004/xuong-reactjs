import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get(`/products/${id}`);
				setProduct(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [id]);

	return (
		<div>
			<h1>Product Detail</h1>
			{product.thumbnail && <img src={product.thumbnail} alt={product.title} />}
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<p>Price: ${product.price}</p>
			<p>Stock: {product.stock}</p>
			<p>Rating: {product.rating}</p>
			<p>Brand: {product.brand}</p>
		</div>
	);
};

export default ProductDetail;
