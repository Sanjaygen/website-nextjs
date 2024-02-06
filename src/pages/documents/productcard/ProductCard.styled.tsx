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
    margin-top:-115px;
    margin-left:12px;
    margin-right:12px;
    margin-bottom:10px;
    opacity:0.9;
    transition: margin-top 0.4s ease;
    @media (max-width: 600px) {
        margin-top:-105px;
        margin-left:12px;
        margin-right:12px;
      }
    
    
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