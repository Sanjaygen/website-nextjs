import { appColors } from "@/theme/colorConfig";
import { Typography, styled } from "@mui/material";


export const StyledAboutUsContainer = styled('div')`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right !important;

`;

export const StyledLeftContent = styled('div') <{textColor:string}>`
color: ${({textColor}) => textColor || appColors['black']};
  position: relative;
  margin-right: 20px;
  width: 58%;
  display: block;
  padding: 0 20px;
  font-size: 13px;
  line-height: 24px;
  @media (max-width: 772px ) {
    width: 100%;
  }
`;

export const StyledLeftPara = styled(Typography)`
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const Head = styled(Typography)`
  line-height: 1.2;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 500;
}
`;

export const StyledRightContent = styled('div')`
  padding: 0 15px;
  max-width: 41%;
  float: right;
  margin: 0 auto;
@media(max-width:912px){
  width:30%;
  margin:0px;
}
@media(max-width:524px){
    width:20%;
    margin:0px;
  }
`;

export const ContentWrapper = styled('div')<{ bgColor: string }>`
  display: flex;
background: ${({bgColor}) => bgColor || appColors['white']};
  flex-wrap: wrap;
  flex-basis:58.333%;
  padding: 35px 50px 35px 48px;
`;
