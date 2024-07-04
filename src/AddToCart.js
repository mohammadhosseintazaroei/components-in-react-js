import { useState } from "react";

function AddToCard(props) {
  const handleClick = () => {
    localStorage.setItem("product", JSON.stringify(props.product));
  };
  return (
    <button onClick={handleClick} className="addToCart">
      <>Add To Cart</>
    </button>
  );
}

export default AddToCard;
