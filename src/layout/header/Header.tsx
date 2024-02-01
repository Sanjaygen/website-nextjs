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
import { gql, useQuery } from "@apollo/client";

const HEADERDATA = gql`
  query GetHeaders {
    headers {
      data {
        attributes {
          Head {
            content
            bgcolor
          }
          navbar {
            ... on ComponentNavBarImages {
              logo {
                data {
                  attributes {
                    name
                    alternativeText
                    url
                  }
                }
              }
            }
            ... on ComponentNavBarHome {
              Title
            }
            ... on ComponentNavBarAbout {
              Title
            }
            ... on ComponentNavBarProducts {
              title
              PRODUCTS
            }
            ... on ComponentNavBarBlog {
              Title
            }
            ... on ComponentNavBarContact {
              Title
            }
            ... on ComponentElementButtonlink {
              title
              isExternal
              type
            }
          }
        }
      }
    }
  }
`;
const Header = () => {
  const { loading, error, data } = useQuery(HEADERDATA);

  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  const headersData = data.headers.data[0].attributes;
  const buttonLink = headersData.navbar.find(
    (item: any) => item.type === "PRIMARY_1f5b36"
  );
  console.log(headersData);
  const logoAttributes = headersData.navbar
    .filter((item: any) => item.__typename === "ComponentNavBarImages")
    .map((item: any) => item.logo.data[0].attributes);
  console.log("logoAttributes:", logoAttributes);

  const productsData = headersData.navbar.find(
    (item: any) => item.__typename === "ComponentNavBarProducts"
  );
  const productsLink =
    productsData && productsData.PRODUCTS && productsData.PRODUCTS.items
      ? productsData.PRODUCTS.items
      : [];

  return (
    <>
      <TopHeader>
        <TopTypography variant="body2">
          {headersData.Head.content}
        </TopTypography>
      </TopHeader>
      <HeaderDiv>
        <ImageLogo>
          {logoAttributes.length > 0 && (
            <img
              src={logoAttributes[0].url}
              alt={logoAttributes[0].alternativeText}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </ImageLogo>
        <ListNavbar isClick={isClick}>
          {headersData.navbar.map((navItem: any, index: number) => (
            <Link
              key={index}
              href={navItem.link}
              style={{ textDecoration: "none" }}
            >
              <AnchorLink>{navItem.Title}</AnchorLink>
            </Link>
          ))}
          {productsLink.length > 0 && (
            <ProductsLink>
              <Link href="#" style={{ textDecoration: "none" }}>
                <LinkProduct>
                  Product
                  <ArrowDropDownIcon
                    sx={{ position: "relative", top: "5px" }}
                  />
                </LinkProduct>
              </Link>
              {productsLink.map((productItem: any, index: number) => (
                <Link
                  key={index}
                  href={productItem.link}
                  sx={{
                    textDecoration: "none",
                    position: "absolute",
                    top: `${40 + 35 * index}px`,
                    zIndex: "100",
                  }}
                >
                  <DropDown>{productItem.title}</DropDown>
                </Link>
              ))}
            </ProductsLink>
          )}
          {buttonLink && <ButtonStyles>{buttonLink.title}</ButtonStyles>}
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
