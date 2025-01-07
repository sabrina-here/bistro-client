import React from "react";
import FoodCard from "../../../Components/FoodCard";

export default function OrderTab({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
}
