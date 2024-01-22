import { Typography, styled } from "@mui/material";


export const StyledAboutUsContainer = styled('div')`
  background-image: url('http://ishwara.in/img/slide3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right !important;
`;

export const StyledLeftContent = styled('div')`
  position: relative;
  margin-right: 20px;
  width: 58%;
  display: block;
  padding: 0 20px;
  color: white;
  font-size: 13px;
  line-height: 24px;
  @media (max-width: 772px ) {
    width: 100%;
  }
`;

export const StyledLeftPara = styled(Typography)`
  color: white;
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

export const ContentWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-basis:58.333%;
  background: #155d338c;
  padding: 35px 50px 35px 48px;
`;
