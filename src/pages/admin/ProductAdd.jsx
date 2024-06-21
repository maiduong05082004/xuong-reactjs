import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import productSchema from "../../schemaValid/productSchema";

const ProductAdd = ({ onAdd }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(productSchema),
	});
	const onSubmit = (data) => {
		console.log(data);
		onAdd(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Product Add</h1>
				<div className="mb-3">
					<label htmlFor="id" className="form-label">
						ID
					</label>
					<input type="number" className="form-control" id="id" {...register("id", { required: true })} />
					{errors.id?.message && <p className="text-danger">{errors.id?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" id="title" {...register("title", { required: true })} />
					{errors.title?.message && <p className="text-danger">{errors.title?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input type="text" className="form-control" id="description" {...register("description")} />
					{errors.description?.message && <p className="text-danger">{errors.description?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Price
					</label>
					<input
						type="number"
						className="form-control"
						id="price"
						{...register("price", { required: true, valueAsNumber: true })}
					/>
					{errors.price?.message && <p className="text-danger">{errors.price?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="discountPercentage" className="form-label">
						Discount Percentage
					</label>
					<input
						type="number"
						className="form-control"
						id="discountPercentage"
						{...register("discountPercentage", { required: true, valueAsNumber: true })}
					/>
					{errors.discountPercentage?.message && <p className="text-danger">{errors.discountPercentage?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="rating" className="form-label">
						Rating
					</label>
					<input
						type="number"
						step="0.1"
						className="form-control"
						id="rating"
						{...register("rating", { required: true, valueAsNumber: true })}
					/>
					{errors.rating?.message && <p className="text-danger">{errors.rating?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="stock" className="form-label">
						Stock
					</label>
					<input
						type="number"
						className="form-control"
						id="stock"
						{...register("stock", { required: true, valueAsNumber: true })}
					/>
					{errors.stock?.message && <p className="text-danger">{errors.stock?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="brand" className="form-label">
						Brand
					</label>
					<input type="text" className="form-control" id="brand" {...register("brand", { required: true })} />
					{errors.brand?.message && <p className="text-danger">{errors.brand?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="category" className="form-label">
						Category
					</label>
					<input type="text" className="form-control" id="category" {...register("category", { required: true })} />
					{errors.category?.message && <p className="text-danger">{errors.category?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="thumbnail" className="form-label">
						Thumbnail URL
					</label>
					<input type="text" className="form-control" id="thumbnail" {...register("thumbnail", { required: true })} />
					{errors.thumbnail?.message && <p className="text-danger">{errors.thumbnail?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="images" className="form-label">
						Image URLs
					</label>
					<input
						type="text"
						className="form-control"
						id="images"
						{...register("images", { required: true })}
						placeholder="Enter URLs separated by commas"
					/>
					{errors.images?.message && <p className="text-danger">{errors.images?.message}</p>}
				</div>
				<div className="mb-3">
					<button className="btn btn-primary w-100" type="submit">
						Add Product
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductAdd;
