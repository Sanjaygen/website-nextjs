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
import { useQuery } from '@apollo/client';
import { QUERY } from '@/pages/homepage/query';
import { api } from '@/service/backend-api';

const AboutUs = (props: any) => {

  const about = props;
  console.log('about',about)

  const { loading, error, data } = useQuery(QUERY);

  const LeftContent = () => {
    return (
      <StyledLeftContent style={{ color:`${about[0]?.colors?.theme[0]?.colors?.text}`}}>
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
      <ContentWrapper style={{ backgroundColor: `${about[0]?.colors?.theme[0]?.colors?.bgcolor}`}}>
        {LeftContent()}
        {RightContent()}
      </ContentWrapper>
    </StyledAboutUsContainer>

  );
};

export default AboutUs;
