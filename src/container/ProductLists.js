import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductComponent from "./ProductComponet";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/action/productActions";

export default function ProductLists() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const product = useSelector((state) => state.allProduct.product);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("err", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, [url]);
  return (
    <div className="container">
      <br></br>

      <h1 className="mb-4">Product List </h1>

      <ProductComponent />
    </div>
  );
}
