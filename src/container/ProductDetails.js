import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/action/productActions";

export default function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId !== "") {
      fetchProductDetails();
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt="item" />
        </div>
        <div className="col-md-6">
          <p className="">{product.title}</p>
          <p className="">{product.description}</p>
          <p className="">{product.price}</p>
          {/* <p className="">{product.rating.count}</p> */}
        </div>
      </div>
    </div>
  );
}
