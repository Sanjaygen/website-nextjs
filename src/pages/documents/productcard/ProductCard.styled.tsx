import { CardActionArea, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(CardActionArea)`
  &:hover{
     transform:scale(1.2);
     transition:all 0.4s ease 0s;
  }
`
export const StyledCardContent = styled(CardContent)`
    color:black;
    padding:30px;
    position:relative;
    background:#fff;
    margin-top:-120px;
    margin-left:12px;
    margin-right:12px;
    opacity:0.8;
    
`
export const StyledThypography = styled(Typography)`
    text-align:center;
     &:hover{
        color:brown;
     }
`
export const ThypographyProduct = styled(Typography)`
    text-align:center;
    font-family:oswald;
    @media(max-width:900px){
        font-size:13px;
    } 
`