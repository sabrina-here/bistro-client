import React from "react";

export default function MenuItem({ item }) {
  const { image, price, recipe, name } = item;

  return (
    <div className="flex space-x-4">
      <img
        src={image}
        className="w-[100px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}-------</h3>
        <p>{recipe}</p>
      </div>
    </div>
  );
}
