"use client";

import Footer from "@/layout/footer/Footer";
import Header from "@/layout/header/Header";
import Store from "../documents/store/Store";
import AboutUs from "@/layout/about/about";
import { Client } from "../documents/client/client";
import ProductCard from "../documents/productcard/ProductCard";
import { Contact } from "../documents/contact/Contact";
import { useQuery } from "@apollo/client";
import { QUERY } from "./query";
import ProductDetails from "../documents/productdetails/ProductDetails";
import Blog from "../documents/blog/Blog";


const HomePage = () => {
  const { data, loading, error } = useQuery(QUERY);
  const homeData = data?.homes
  const {PRODUCTS,aboutus,clientreviews,client,Details,contactheader,blogcontent,footer} =  homeData?.data[0]?.attributes || {}
   console.log(PRODUCTS,'PRODUCTS')
   console.log(aboutus,'aboutus')
   console.log(clientreviews,'clientreviews')
   console.log(client,'client')
   console.log(Details,'Details')
   console.log(contactheader,'contactheader')
   console.log(blogcontent,'blogcontent')
   console.log('footer',footer)

  


  return (
    <>
      <Header />
      <ProductCard {...PRODUCTS} />
      <AboutUs {...aboutus}/>
      <Client {...clientreviews} />
      <Store {...client}/> 
      <ProductDetails {...Details}/>
      <Contact {...contactheader} />
      <Blog {...blogcontent} /> 
      <Footer {...footer} />
    </>
  );
};

export default HomePage;
