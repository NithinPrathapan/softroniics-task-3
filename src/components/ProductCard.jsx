import React from "react";

const ProductCard = ({ price, image, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center shadow-md px-2 py-6 bg-white rounded-md ">
      <div className="w-full">
        <img
          className="w-[80%] h-[300px] mx-auto justify-center items-center flex object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>
          $ <span>{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
