import { Link, Typography } from "@mui/material";
import styled from "styled-components";

export const TopHeader = styled("div")`
  background-color: #1f5b36;
  color: #fff;
  padding: 10px;
`;
export const TopTypography = styled(Typography)`
  font-size: 15px;
  text-align: center;
  padding-left: 10px;
  font-family: Sans-serif;
  padding: 3px;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export const HeaderDiv = styled("div")`
  display: flex;
  font-family: Oswald;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageLogo = styled("div")`
  img {
    margin-top: 15px;
    margin-left: 60px;
  }
`;
export const ListNavbar = styled("ul")<{ isClick?: boolean }>`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
    padding-top: 20px;
    position: absolute;
    top: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    display: ${(props) => (props.isClick ? "flex" : "none")};
  }
`;
export const NavbarList = styled("li")`
  list-style-type: none;
  margin-top: 15px;
  font-size: 14px;
  text-transform: uppercase;
`;
export const AnchorLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: #1f5b36;
  font-size: 14px;
  &:hover {
    color: #ffc107;
  }
  @media (max-width: 600px) {
    display: block;
    margin-top: 10px;
  }
`;

export const ButtonStyles = styled("button")`
  width: 200px;
  background: #1f5b36;
  color: #fff;
  margin-right: 60px;
  margin-left: 80px;
  padding:10px;
  cursor:pointer;
  @media (max-width: 600px) {
    margin-left: 20px;
    margin-top:20px;
    margin-bottom:20px;
  }
`;
export const DropDown = styled("div")`
  position: absolute;
  margin-left: 135px;
  font-size: 14px;
  width:200px;
  color: #1f5b36;
  background: #fff;
  margin-top: -10px;
  border-left: 5px solid orange;
  display: none;
  @media (max-width: 600px) {
    width: 200px;
    z-index:100;
  }
`;
export const ProductsLink = styled(Link)`
  text-decoration: none;
  color: #1f5b36;
  font-size: 14px;
  margin-left: 20px;
  position: relative;

  &:hover {
    color: #ffc107;
    cursor: pointer;

    ${DropDown} {
      display: block;
    }
  }
`;
export const DropDownList = styled("div")`
  list-style-type: none;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1f5b36;
  font-size: 14px;
  display: block;
  margin-top: 15px;
  padding: 5px;
  &:hover {
    background: #1f5b36;
    color: #fff;
    transition: all 0.3s ease;
  }
`;
export const MenuIconOpen = styled("div")`
  display: none;
  top: 70px;
  position: absolute;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
    left: 85%;
    font-size: 25px;
  }
`;
export const IconClose = styled("div")`
  display: none;
  top: 70px;
  position: absolute;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
    left: 80%;
    font-size: 10px;
    z-index: 9999;
    top: 10px;
  }
`;

export const StyledIcon = styled("div")`

  }
`;
