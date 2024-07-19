import Navbar from "./componets/Navbar";
import ProductList from "./componets/ProductList";
import React, { useState } from "react";
import Footer from "./componets/Footer";

function App() {
  const initialproductList = [
    {
      price: 158,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 996,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  let [products, setproductList] = useState(initialproductList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newproductList = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount += initialproductList[index].price;
    newproductList[index].quantity++;
    setTotalAmount(newTotalAmount);
    setproductList(newproductList);
  };

  const decrementQuantity = (index) => {
    let newproductList = [...products];
    let newTotalAmount = totalAmount;
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--;
      newTotalAmount -= initialproductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setproductList(newproductList);
  };

  const resetQuantity = () => {
    let newproductList = [...products];
    newproductList.map((products) => {
      products.quantity = 0;
    });
    setproductList(newproductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newTotalAmount = totalAmount;
    let newproductList = [...products];
    newTotalAmount -=
      newproductList[index].quantity * newproductList[index].price;
    newproductList.splice(index, 1);
    setproductList(newproductList);
    setTotalAmount(newTotalAmount);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          products={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
