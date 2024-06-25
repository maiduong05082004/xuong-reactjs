import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ data }) => {
    return (
        <>
            <div className="col-md-4" key={data.id}>
                <figure className="card card-product-grid">
                    <div className="max-w-lg max-h-72">
                        <Link to={`/product-detail/${data.id}`}>
                            <img className="w-full h-72" src={data.thumbnail} alt="" />
                        </Link>
                    </div>
                    <figcaption className="info-wrap m-3">
                        <div className="fix-height">
                            <Link to={`/product-detail/${data.id}`} className="title">{data.title}</Link>
                            <div className="price-wrap mt-2">
                                <span className="price mr-3">${data.price}</span>
                                <del className="price-old">${data.price}</del>
                            </div>
                        </div>
                        <Link to={`/product-detail/${data.id}`} className="btn btn-block btn-primary">Add to cart </Link>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}
export default ProductItem;