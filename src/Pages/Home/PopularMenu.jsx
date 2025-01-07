import React, { useEffect, useState } from "react";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";

export default function PopularMenu() {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <h1>popular item section</h1>
      <div className="grid md:grid-cols-2 md:w-1/2 mx-auto gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
}
