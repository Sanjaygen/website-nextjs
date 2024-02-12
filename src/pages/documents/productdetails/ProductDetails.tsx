/* eslint-disable @next/next/no-img-element */
"use client";
import { StyledLink, StyledTypography, StyledTypographyWrapper } from "./ProductDetails.styled";

const renderDescriptionContent = (descriptionData:any) => {
  return (
    <>
      {descriptionData.map((item:any, index:number) => {
        if (item.type === 'text') {
          return item.text;
        } else if (item.type === 'bold') {
          return <strong key={index}>{item.text}</strong>;
        }
        return null;
      })}
    </>
  );
};

const ProductDetails = (props: any) => {
  const productDetail = props;
  console.log('productDetail', productDetail);

  const descriptionData = productDetail[0]?.description[0]?.children || [];
  const tubsDescriptionData = productDetail[1]?.description[0]?.children || [];

  return (
    <>
      <StyledTypographyWrapper variant="">{productDetail[0]?.heading}</StyledTypographyWrapper>
      <StyledTypography variant="body2">
        {renderDescriptionContent(descriptionData)}
      </StyledTypography>
      <StyledTypography variant="body2">
        <StyledLink href="#paper-cups">Paper Cups in India :</StyledLink>
        {renderDescriptionContent(tubsDescriptionData)}
      </StyledTypography>

      <StyledTypography variant="body2">
        <StyledLink href="#paper-glass">Paper Glass in India :</StyledLink>
        {renderDescriptionContent(tubsDescriptionData)}
      </StyledTypography>

      <StyledTypography variant="body2">
        <StyledLink href="#paper-tubs">Paper Tubs in India :</StyledLink>
        {renderDescriptionContent(tubsDescriptionData)}
      </StyledTypography>
    </>
  );
};

export default ProductDetails;
