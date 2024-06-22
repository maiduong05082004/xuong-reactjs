import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h1>Hello, admin</h1>
            <Link to="/admin/product-add" className="btn btn-primary">
                Add new product
            </Link>
            <table className="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Rating</th>
                        <th>Brand</th>
                        <th>Thumbnail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title || "Đang cập nhật"}</td>
                            <td>{p.price || "Đang cập nhật"}</td>
                            <td>{p.description || "Đang cập nhật"}</td>
                            <td>{p.stock || "Đang cập nhật"}</td>
                            <td>{p.rating || "Đang cập nhật"}</td>
                            <td>{p.brand || "Đang cập nhật"}</td>
                            <td>{p.thumbnail ? <img src={p.thumbnail} alt="Đang cập nhật" /> : "Đang cập nhật"}</td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                                <Link to={`/admin/product-edit/${p.id}`} className="btn btn-warning">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;