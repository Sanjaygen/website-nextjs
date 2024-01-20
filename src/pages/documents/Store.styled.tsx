import { Link, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const SlideContainer = styled("div")`
  display: flex;
  overflow-x: auto;
  padding: 15px;
`;

export const SlideItem = styled(Paper)`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 218px;
  border: 1px solid #ccc;
  border-top: 1px solid #ccc;
  height: 85px;
  text-align: center;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }
`;
export const StyledTypographyWrapper = styled(Typography)`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 2.5em;
  font-weight: bolder;
  color: #747474;
  margin-top: 8px;
  margin: 10px;
`;

export const StyledTypography = styled(Typography)`
color: #747474;
lineHeight: 24px;
margin: 1%;
font-size: 13px;

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0000ff;
  transition: color 0.3s ease;
  &:hover {
    color: blue; 
  }

  &:active {
    color: red; 
  }

`;