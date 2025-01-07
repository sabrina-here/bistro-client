import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/menu-bg.png";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

export default function Menu() {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      Menu
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover image={menuImg} title={"our menu"} />
      {/* offered section */}
      <div>
        <h1>Todays offer</h1>
        <MenuCategory items={offered} />
      </div>
      {/* dessert section */}
      <section>
        <h1>desserts</h1>
        <MenuCategory items={dessert} title={"dessert"} image={dessertImg} />
      </section>
      {/* soup section */}
      <section>
        <h1>soup</h1>
        <MenuCategory items={soup} title={"soup"} image={soupImg} />
      </section>
    </div>
  );
}
