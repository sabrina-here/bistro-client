import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

export default function Order() {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Home | Order</title>
      </Helmet>
      <Cover image={orderCover} title={"your orders"} />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} title={"salad"} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} title={"pizza"} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} title={"soup"} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} title={"dessert"} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered} title={"drinks"} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
