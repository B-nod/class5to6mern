import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/usercomponents/Layout";
import Homepage from "./pages/userpages/Homepage";
import Product from "./pages/userpages/Product";
import AdminLayout from "./components/admincomponents/AdminLayout";
import Dashboard from "./pages/adminpages/Dashboard";
import AdminHeader from "./components/admincomponents/AdminHeader";
import Addproduct from "./pages/adminpages/Addproduct";
import ProductList from "./pages/adminpages/ProductList";

const Myroutes = () => {
  return (
    <>
      <Router>
        <Routes>
     
          {/* route for user pages */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
          </Route>

               {/* route for admin pages */}
        <Route path="/admin" element={<AdminHeader />}>
            <Route index element={<Dashboard />} />
            <Route path="addproduct" element={<Addproduct/>}/>
            <Route path="productlist" element={<ProductList/>}/>
         
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Myroutes;
