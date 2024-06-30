import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import instance, { getProducts } from "./axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser ? storedUser.user : null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleSubmitForm = async (data) => {
    try {
      if (data.id) {
        await instance.patch(`/products/${data.id}`, data);
        const newData = await getProducts();
        setProducts(newData);
      } else {
        const res = await instance.post("/products", data);
        setProducts([...products, res.data]);
      }
      if (window.confirm("Successfully, redirect to admin page!")) {
        navigate("/admin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await instance.delete(`/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home data={products} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Dashboard data={products} onDelete={handleDeleteProduct} />} />
          <Route path="/admin/product-form" element={<ProductForm onProduct={handleSubmitForm} />} />
          <Route path="/admin/product-form/:id" element={<ProductForm onProduct={handleSubmitForm} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
