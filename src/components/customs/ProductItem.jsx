import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ data }) => {
    return (
        <>
            <div class="col-md-4" key={data.id}>
                <figure class="card card-product-grid">
                    <div class="max-w-lg max-h-72">
                        <Link to={`/product-detail/${data.id}`}>
                            <img className="w-full h-72" src={data.thumbnail} alt="" />
                        </Link>
                    </div>
                    <figcaption class="info-wrap m-3">
                        <div class="fix-height">
                            <Link to={`/product-detail/${data.id}`} class="title">{data.title}</Link>
                            <div class="price-wrap mt-2">
                                <span class="price mr-3">${data.price}</span>
                                <del class="price-old">${data.price}</del>
                            </div>
                        </div>
                        <Link to={`/product-detail/${data.id}`} class="btn btn-block btn-primary">Add to cart </Link>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}
export default ProductItem;