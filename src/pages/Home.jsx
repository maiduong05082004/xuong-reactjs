import React from "react";
import ProductItem from "../components/customs/ProductItem";

function Home({ data }) {
	return (
		<>
		
			<h1>Danh sach san pham</h1>
			<main className="col-md-10 m-auto">
				<div className="row">
					{data.map((product) => (
						<ProductItem key={product.id} data={product} />
					))}
					<nav className="mt-4" aria-label="Page navigation sample">
						<ul className="pagination">
							<li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
							<li className="page-item active"><a className="page-link" href="#">1</a></li>
							<li className="page-item"><a className="page-link" href="#">2</a></li>
							<li className="page-item"><a className="page-link" href="#">3</a></li>
							<li className="page-item"><a className="page-link" href="#">Next</a></li>
						</ul>
					</nav>
				</div>
			</main>
		</>
	);
}

export default Home;