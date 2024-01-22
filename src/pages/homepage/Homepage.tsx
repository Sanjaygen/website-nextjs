'use client';
import Footer from "@/layout/footer/Footer";
import Header from "@/layout/header/Header";
import Store from "../documents/Store";
import AboutUs from "@/layout/about/about";
import { Client } from "../client/client";

const HomePage = () => {
    return (
        <>
        <Header/>
        <AboutUs/>
        <Client />
        <Store/>
        <Footer/>
         </>
    );
};

export default HomePage;