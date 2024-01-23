/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AnchorLink,ButtonStyles,DropDown, DropDownList,  HeaderDiv, IconClose, ImageLogo, ListNavbar, MenuIconOpen, NavbarList, ProductsLink, StyledIcon, StyledLink, TopHeader, TopTypography } from './Header.styled';

const Header = () => {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () =>{
        setisClick(!isClick);
    }

    const url = [ "http://ishwara.in/img/logo.jpg" ];
return (
      <>
            <TopHeader>
              <TopTypography variant='body2'>Get your paper disposals from your entrusted brand, Ishwara</TopTypography>
            </TopHeader>
            <HeaderDiv>
              <ImageLogo>
                <img src={url[0]} alt="Ishwara Logo"/>
              </ImageLogo>
              <ListNavbar isClick = {isClick}>
                 <NavbarList>
                      <AnchorLink href="#home">Home</AnchorLink>
                      <AnchorLink href="#about">About</AnchorLink>
                      <>
                      <ProductsLink>Products<ArrowDropDownIcon sx={{position:'relative',top:'5px'}} />
                         <DropDown>
                            <DropDownList>                         
                                <StyledLink href='#paper-tubes'>PAPER TUBES</StyledLink>                                
                                <StyledLink href='#paper-cups'>PAPER CUPS</StyledLink>                                                               
                                <StyledLink href='#paper-glass'>PAPER GLASS</StyledLink>                                
                                <StyledLink href='#paper-containers'>PAPER CONTAINERS</StyledLink>                                  
                            </DropDownList>
                         </DropDown>
                         </ProductsLink>
                      </>
                      <AnchorLink href="#blog">Blog</AnchorLink>
                      <AnchorLink href="#contact">Contact</AnchorLink>
                      <ButtonStyles>DOWNLOAD CATLOGUE</ButtonStyles>
                 </NavbarList>
                 
              </ListNavbar>
            </HeaderDiv>
             <StyledIcon  onClick={toggleNavbar}>
               {isClick ? (               
                   <IconClose>
                      <CloseIcon/>
                   </IconClose>                
               ):(
                <>
                    <MenuIconOpen>
                    <MenuIcon/>
                    </MenuIconOpen> 
                    <ListNavbar/>
                </>
                )} 
             </StyledIcon>
      </>
    )
  }

export default Header