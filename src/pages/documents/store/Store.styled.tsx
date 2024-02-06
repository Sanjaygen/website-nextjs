import { Link, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const SlideContainer = styled("div")`
  display: flex;
  margin-bottom:-15px;
  // padding-bottom:50px;
  overflow-y:hidden;
  overflow-x:scroll; 
  padding: 15px;
  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom:-15px;  
  }
`;
export const SlideItem = styled(Paper)`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 200px;
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

  @media (max-width: 768px) {
    width: 150px;
    height: 65px;
    margin-right: 10px;
    padding: 5px;
  }
`;