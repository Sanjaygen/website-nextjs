/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";
import {AnchorLink,ButtonStyles,DropDown,HeaderDiv,IconClose,ImageLogo,LinkProduct,ListNavbar,MenuIconOpen,ProductsLink,StyledIcon,TopHeader,TopTypography,} from "./Header.styled";

const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const url = ["http://ishwara.in/img/logo.jpg"];

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
            <Link href="/" style={{textDecoration:'none'}}>
              <AnchorLink>Home</AnchorLink>
            </Link>
            <Link href="/" style={{textDecoration:'none'}}>
              <AnchorLink>About</AnchorLink>
            </Link>
            <ProductsLink>
            <Link href="#" style={{textDecoration:'none'}}>
              <LinkProduct>
                Product
                <ArrowDropDownIcon sx={{ position: "relative", top: "5px" }} />
              </LinkProduct>
            </Link>

                <Link href="#paper-tube" style={{textDecoration:'none',position:'absolute',top:'40px'}}>
                  <DropDown>PAPER TUBS</DropDown>
                </Link>
                <Link href="#paper-cups" style={{textDecoration:'none',position:'absolute',top:'70px'}}>
                  <DropDown>PAPER CUPS</DropDown>
                </Link>
                <Link href="#paper-glass" style={{textDecoration:'none',position:'absolute',top:'100px'}}>
                  <DropDown>PAPER GLASS</DropDown>
                </Link>
                <Link href="#paper-cont" style={{textDecoration:'none',position:'absolute',top:'128px'}}>
                  <DropDown>PAPER CONTAINERS</DropDown>
                </Link>
                </ProductsLink>
            <Link href="/" style={{textDecoration:'none'}}>
              <AnchorLink>Blog</AnchorLink>
            </Link>
            <Link href="/" style={{textDecoration:'none'}}>
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
              <MenuIcon style={{fontSize:'28px',fontWeight:'bold'}}/>
            </MenuIconOpen>
            <ListNavbar />
          </>
        )}
      </StyledIcon>
    </>
  );
};

export default Header;