import { Link, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTypographyWrapper = styled(Typography)`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 2.5em;
  font-weight: bolder;
  color: #747474;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const StyledTypography = styled(Typography)`
  strong {
    font-weight: bold;
  }
color: #747474;
lineHeight: 24px;
margin: 1%;
font-size: 13px;

@media (max-width: 768px) {
  font-size: 12px;
}


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