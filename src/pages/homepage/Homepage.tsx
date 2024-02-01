"use client";

import Footer from "@/layout/footer/Footer";
import Header from "@/layout/header/Header";
import Store from "../documents/store/Store";
import AboutUs from "@/layout/about/about";
import { Client } from "../client/client";
import ProductCard from "../documents/productcard/ProductCard";
import { Contact } from "../documents/contact/Contact";
import { useQuery } from "@apollo/client";
import { QUERY } from "./query";

const HomePage = () => {
  const { data, loading, error } = useQuery(QUERY);
  console.log(data,'data')
  return (
    <>
      <Header />
      <ProductCard />
      <AboutUs />
      <Client />
      <Store />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
