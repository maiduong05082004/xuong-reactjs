import React from "react";
import ProductItem from "../components/customs/ProductItem";

function Home({ data }) {
	return (
		<>
			<h1>Danh sach san pham</h1>
			<main class="col-md-10 m-auto">
				<div class="row">
					{data.map((product) => (
						<ProductItem data={product} />
					))}
					<nav class="mt-4" aria-label="Page navigation sample">
						<ul class="pagination">
							<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
							<li class="page-item active"><a class="page-link" href="#">1</a></li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item"><a class="page-link" href="#">Next</a></li>
						</ul>
					</nav>
				</div>
			</main>
		</>
	);
}

export default Home;