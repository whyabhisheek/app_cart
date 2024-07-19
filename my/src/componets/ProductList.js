import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.products.map((product, i) => {
    return (
      <Product
        product={product}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        index={i}
        removeItem={props.removeItem}
      />
    );
  });
}
