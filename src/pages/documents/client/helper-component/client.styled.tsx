import { appColors } from "@/theme/colorConfig";
import { Box, Button, Container, Link, MobileStepper, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledClientContainer = styled.section`
    display:block;
    background-size: cover !important; 
    background-repeat: no-repeat;
`;

export const ClientContainer = styled('div')<{ bgColor: string }>`
    background: ${({bgColor}) => bgColor || appColors['white']};
    padding-bottom: 40px !important;
    padding-top: 70px !important;
`;

export const MobileStepperStyled = styled(MobileStepper)`
    background-color:transparent;
    justify-content:center;
    margin-top:14px;
    padding:0px;

    .MuiMobileStepper-dot {
        background-color: white; 
        height:12px;
        width:12px;
        margin:0 6px;

    }
    .MuiMobileStepper-dotActive {
        background-color: transparent;
        border:1px solid white;
    }

`;

export const LabelText = styled(Typography)`
    text-align:center;
    font-size:13px;
    line-height:24px;
    margin-bottom: 15px;
`;
export const Anchor = styled(Link)`
   color:white;
   text-decoration:none;
   text-transform: uppercase;
   &:hover{
    color:#ce9634;
   
`;
export const ClientImg = styled('div')`
    color: #ffffff;
    display: inline-block;
    min-height: 56px;
    position: relative;
    text-align: left;

`;
export const ClientTitle = styled('div')`
align-items:center;
font-size: 14px;
line-height: 24px;
padding:  15px;
transition: all 0.4s ease 0s;
font-weight: 500;
`;

export const TextStyled = styled(Container)`
    background-color: transparent;
    margin: 0 auto;
    color:white;
    padding:10px;
`;
export const StyledBox = styled(Box)`
  flex-grow: 1;
  padding: 0 15px;
  @media (max-width: 600px) {
    margin: 0;
  
`;

export const AvatherStyled = styled('div')`
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;   
`;
export const ButtonStyled = styled(Button)`
    color:white;   
`;

export const Header = styled(Typography)(() => ({
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Oswald',
    fontSize: '24px',
    lineHeight: '29px',
    marginBottom: '10px',
    transition: 'opacity 0.24s ease-in-out 0s',
    textTransform: 'uppercase',
}));

export const StyledDiv = styled('div')(() => ({
    width: '100%',
    paddingRight: '15px',
    paddingBottom: '20px',
    paddingLeft: '15px',
    margin: '0 auto',
    '@media (min-width: 1170px)': {
        maxWidth: '1170px',
    },
    '@media (min-width: 992px)': {
        maxWidth: '960px',
    },
    '@media (min-width: 768px)': {
        maxWidth: '720px',
    },
    '@media (min-width: 576px)': {
        maxWidth: '540px',
    },

}));
