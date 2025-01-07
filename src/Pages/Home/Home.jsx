import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

// testimonials section and category section were done with react awesome components , its the carousel.
// swiper js and stuff.
// featured section has parallax, (it just means that the background image is fixed)
// parallax can also be done with the react parallax package , (used in cover.jsx)
// react rating is also from react awesome components. don't forget to add the imports.
// helmet is used to dynamically change page title . just search react helmet async. don't forget to wrap with
// helmet provider
// you can use react tabs package from awesome components. (order.jsx), don't forget the css imports
// used react simple captcha package for the recaptcha. there is also recaptcha in awesome. (login.jsx)
// There is a thing called formik similar to react hook form. we used react hook form here. (signup.jsx)
// user sweet alert 2 . (login.jsx)
// to create private route, search "react router tutorial" => Examples => git link => auth => src => App.tsx

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
}
