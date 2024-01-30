/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";
import {
  AnchorLink,
  ButtonStyles,
  DropDown,
  HeaderDiv,
  IconClose,
  ImageLogo,
  LinkProduct,
  ListNavbar,
  MenuIconOpen,
  ProductsLink,
  StyledIcon,
  TopHeader,
  TopTypography,
} from "./Header.styled";

const Header = () => {
  const [data, setData] = useState([]);
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const url = ["http://ishwara.in/img/logo.jpg"];

  const getHeader = async () => {
    const response = await fetch("http://localhost:1337/api/headers");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getHeader();
  }, []);

  return (
    <>
      <TopHeader>
        <TopTypography variant="body2">
          Get your paper disposals from your entrusted brand, Ishwara
        </TopTypography>
      </TopHeader>
      <HeaderDiv>
        <ImageLogo>
          <img src={url[0]} alt="Ishwara Logo" />
        </ImageLogo>
        <ListNavbar isClick={isClick}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <AnchorLink>Home</AnchorLink>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <AnchorLink>About</AnchorLink>
          </Link>
          <ProductsLink>
            <Link href="#" style={{ textDecoration: "none" }}>
              <LinkProduct>
                Product
                <ArrowDropDownIcon sx={{ position: "relative", top: "5px" }} />
              </LinkProduct>
            </Link>

            <Link
              href="#paper-tube"
              sx={{
                textDecoration: "none",
                position: "absolute",
                top: "40px",
                zIndex: "100",
              }}
            >
              <DropDown>PAPER TUBS</DropDown>
            </Link>
            <Link
              href="#paper-cups"
              sx={{
                textDecoration: "none",
                position: "absolute",
                top: "75px",
                zIndex: "100",
              }}
            >
              <DropDown>PAPER CUPS</DropDown>
            </Link>
            <Link
              href="#paper-glass"
              sx={{
                textDecoration: "none",
                position: "absolute",
                top: "110px",
                zIndex: "100",
              }}
            >
              <DropDown>PAPER GLASS</DropDown>
            </Link>
            <Link
              href="#paper-cont"
              sx={{
                textDecoration: "none",
                position: "absolute",
                top: "145px",
                zIndex: "100",
              }}
            >
              <DropDown>PAPER CONTAINERS</DropDown>
            </Link>
          </ProductsLink>
          <Link href="/" style={{ textDecoration: "none" }}>
            <AnchorLink>Blog</AnchorLink>
          </Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <AnchorLink>Contact</AnchorLink>
          </Link>
          <ButtonStyles>DOWNLOAD CATALOGUE</ButtonStyles>
        </ListNavbar>
      </HeaderDiv>
      <StyledIcon onClick={toggleNavbar}>
        {isClick ? (
          <IconClose>
            <CloseIcon />
          </IconClose>
        ) : (
          <>
            <MenuIconOpen>
              <MenuIcon style={{ fontSize: "28px", fontWeight: "bold" }} />
            </MenuIconOpen>
            <ListNavbar />
          </>
        )}
      </StyledIcon>
    </>
  );
};

export default Header;
