import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import productSchema from "../../schemaValid/productSchema";
import instance from "../../axios";
import { useParams } from "react-router-dom";

const ProductEdit = ({ onEdit }) => {
    const { id } = useParams();
    const [brands, setBrands] = useState([]);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ resolver: zodResolver(productSchema) });
    const [selectedBrand, setSelectedBrand] = useState(""); // State to hold selected brand

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/products/${id}`);
                reset(data);
                setSelectedBrand(data.brand);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id, reset]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const { data } = await instance.get(`/brand`);
                setBrands(data);
            } catch (error) {
                console.error("Error fetching brands: ", error);
            }
        };

        fetchBrands();
    }, []);

    const onSubmit = (data) => {
        onEdit({ ...data, id });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Product Edit</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input type="text" className="form-control" id="title" {...register("title", { required: true })} />
                    {errors.title?.message && <p className="text-danger">{errors.title?.message}</p>}
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
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input type="text" className="form-control" id="description" {...register("description")} />
                    {errors.description?.message && <p className="text-danger">{errors.description?.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">
                        Rating
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="rating"
                        step="0.1"
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
                    <select
                        className="form-control"
                        id="brand"
                        {...register("brand", { required: true })}
                    >
                        {selectedBrand && (
                            <option key={selectedBrand.id} value={selectedBrand.name}>
                                {selectedBrand.name}
                            </option>
                        )}
                        <option value="">Select a brand</option>
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.name}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    {errors.brand?.message && <p className="text-danger">{errors.brand?.message}</p>}
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary w-100" type="submit">
                        Edit Product
                    </button>
                </div>
            </form>
        </>
    );
};

export default ProductEdit;
