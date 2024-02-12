/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import {
  ContentWrapper,
  Head,
  StyledAboutUsContainer,
  StyledLeftContent,
  StyledLeftPara,
  StyledRightContent
} from './about.styled'
import { api } from '@/service/backend-api';

const AboutUs = (props: any) => {

  const about = props;
  console.log('about',about)
  const aboutBgColor =  about[0]?.colors?.theme[0]?.colors?.bgcolor;
  const aboutColor = about[0]?.colors?.theme[0]?.colors?.text;
  const LeftContent = () => {
    return (
      <StyledLeftContent textColor={aboutColor}>
        <Head variant='h2'>{about[0]?.Title}</Head>
        <StyledLeftPara >{about[0]?.description1}</StyledLeftPara>
        <StyledLeftPara >{about[0]?.description2}</StyledLeftPara>
        <StyledLeftPara >{about[0]?.description3}</StyledLeftPara>
        <StyledLeftPara >{about[0]?.description4}</StyledLeftPara>
        

      </StyledLeftContent>
    );
  };
  const RightContent=()=>{
    return(
      <StyledRightContent>
      <img src={api+about[0]?.image.data.attributes.url} height='403px' alt="Ishwara Logo" />
    </StyledRightContent>
    )
  }
  

  return (

    <StyledAboutUsContainer style={{ background: `url(${api + about[0]?.backgroundImage?.data[0]?.attributes?.url})`}} >
      <ContentWrapper bgColor={aboutBgColor}>
        {LeftContent()}
        {RightContent()}
      </ContentWrapper>
    </StyledAboutUsContainer>

  );
};

export default AboutUs;
