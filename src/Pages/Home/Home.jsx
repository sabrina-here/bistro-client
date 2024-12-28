import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

// testimonials section and category section were done with react awesome components , its the carousel.
// swiper js and stuff.
// featured section has parallax, (it just means that the background image is fixed)
// react rating is also from react awesome components. don't forget to add the imports.

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
}
