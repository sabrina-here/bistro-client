import React from "react";
import MenuItem from "../../Shared/MenuItem";
import Cover from "../../Shared/Cover";
import { Link } from "react-router-dom";

export default function MenuCategory({ items, title, image }) {
  return (
    <div>
      <div>{title && <Cover image={image} title={title} />}</div>
      <div className="grid md:grid-cols-2 md:w-1/2 mx-auto gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order now
        </button>
      </Link>
    </div>
  );
}
