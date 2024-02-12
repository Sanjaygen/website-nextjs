/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";
import {
  AnchorLink,
  ButtonStyles,
  HeaderDiv,
  IconClose,
  ImageLogo,
  ListNavbar,
  MenuIconOpen,
  StyledIcon,
  TopHeader,
  TopTypography,
} from "./Header.styled";
import {  useQuery } from "@apollo/client";
import { api } from "@/service/backend-api";
import { HeaderQuery } from "./Query";


const Header = () => {
  const { loading, error, data } = useQuery(HeaderQuery);
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  
  const headersData = data?.headers?.data[0]?.attributes;

  const logoAttributes = headersData.navbar
    .filter((item: any) => item.__typename === "ComponentNavBarImages")
    .map((item: any) => item.logo.data[0].attributes);

  const imageLogo = logoAttributes[0].url
  const alt = logoAttributes[0].alternativeText
  const headerBgColor =  headersData.Head[0].colors.theme[0].colors.bgcolor;
  const textColor = headersData.Head[0].colors.theme[0].colors.text;

  return (
    <>
      <TopHeader bgColor={headerBgColor} textColor={textColor} >
        <TopTypography variant="body2">
          {headersData.Head[0].content}
        </TopTypography>
      </TopHeader>
      <HeaderDiv>
        <ImageLogo>
          {logoAttributes.length > 0 && (
            <img
              src={api + imageLogo}
              alt={alt}
            />
          )}
        </ImageLogo>
        <ListNavbar isClick={isClick}>
          {headersData.navbar.map((navItem: any, index: number) => (
            <React.Fragment key={index}>
              {navItem.__typename === "ComponentElementButtonlink" ? (
                <Link
                  href={navItem.link}
                  style={{
                    textDecoration: "none",
                    color: navItem.colors.text, 
                    backgroundColor: navItem.colors.bgcolor,
                  }}
                >
                  <ButtonStyles>{navItem.Title}</ButtonStyles>
                </Link>
              ) : (
                <Link
                  href={navItem.link}
                  style={{ textDecoration: "none" }}
                >
                  <AnchorLink>{navItem.Title}</AnchorLink>
                </Link>
              )}
            </React.Fragment>
          ))}
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
