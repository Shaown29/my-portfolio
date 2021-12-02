import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ data }) => {
  console.log("data", data);

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <img src={data.img[0]} alt="" className="p-img" />

      <div className="p-dis">
        name: {data.name}
        <br />
        <Link to={`/details/${data.id}`}>
          <button className="btn">Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
