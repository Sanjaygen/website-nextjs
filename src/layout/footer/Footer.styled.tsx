import { appColors } from "@/theme/colorConfig";
import { Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FooterWrapper = styled("footer")<{ bgColor: string , textColor:string}>`
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
  padding-top: 60px;
  padding-right: 20px;
  padding-bottom: 50px;
  padding-left: 20px;

  @media (min-width: 600px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  @media (min-width: 960px) {
    padding-right: 100px;
    padding-left: 100px;
  }

  @media (min-width: 1280px) {
    padding-right: 150px;
    padding-left: 150px;
  }
`;

export const CustomTypography = styled(Typography)`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 9px;
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  line-height: 29px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const DivWrapper = styled("div")`
  cursor: pointer;
`;

export const TypographyStyled = styled(Typography)<{ bgColor: string , textColor:string}>`
background: ${({bgColor}) => bgColor || appColors['white']};
color: ${({textColor}) => textColor || appColors['black']};
  padding-top: 7px;
  padding-right: 20px;
  padding-bottom: 7px;
  padding-left: 20px;
  font-style: normal;
  line-height: 42px;
  margin-bottom: 0;

  @media (min-width: 600px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  @media (min-width: 960px) {
    padding-right: 100px;
    padding-left: 100px;
  }

  @media (min-width: 1280px) {
    padding-right: 150px;
    padding-left: 150px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 5px;
  color: #ce9634;
  &:hover {
    text-decoration: underline;
  }
`;
