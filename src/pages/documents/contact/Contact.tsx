/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, TextField, TextareaAutosize, Typography } from "@mui/material";
import {
  BackgroundImage,
  Contactdiv,
  FormGroup1,
  LabelContainer,
  MapDiv,
  NavbarContainer,
  Overlay,
  StyledButton,
  StyledFormContainer,
  StyledLink,
  Styledcontainer,
  Title,
  TypographyStyled,
} from "./Contact.styled";
import { api } from "@/service/backend-api";
import { useQuery } from "@apollo/client";
import { ContactQuery } from "./query";

export const Contact = () => {

  const { data } = useQuery(ContactQuery);

  const { contactUses } = data || {};
  const { contactbanner, contactdetails } = contactUses?.data?.[0].attributes || {};
  console.log('contactbanner',contactbanner)
  console.log('contactdetails',contactdetails)

  const contactBgColor = contactbanner?.[0].colors?.theme?.[0]?.colors?.bgcolor;
  const contactButton = contactdetails?.[4]?.colors?.button[0]?.colors?.bgcolor;
  
  return (
    <>
      <BackgroundImage style={{ background: `url(${api + contactbanner?.[0].backgroundImage?.data[0]?.attributes?.url})`}}>
        <Overlay bgColor={contactBgColor}>
          <Title>{contactbanner?.[0]?.title}</Title>
        </Overlay>
        <NavbarContainer>
          <StyledLink href="/"> {contactbanner?.[0]?.link}</StyledLink>{contactbanner?.[0]?.content}
        </NavbarContainer>
      </BackgroundImage>
      <Styledcontainer>
        <StyledFormContainer>
          <Contactdiv>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <LabelContainer>
                <TypographyStyled variant="body2">{contactdetails?.[0]?.label}</TypographyStyled>
                <TextField
                  required
                  id="name"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </LabelContainer>
              <LabelContainer>
                <TypographyStyled variant="body2">{contactdetails?.[1]?.label}</TypographyStyled>
                <TextField
                  required
                  id="email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </LabelContainer>
              <LabelContainer>
                <TypographyStyled variant="body2">{contactdetails?.[2]?.label}</TypographyStyled>
                <TextField
                  required
                  id="phone"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </LabelContainer>
              <LabelContainer>
                <TypographyStyled variant="body2">{contactdetails?.[3]?.label}</TypographyStyled>
                <TextareaAutosize
                  id="message"
                  aria-label="message"
                  style={{
                    width: "100%",
                    height: "181px",
                    padding: "8px",
                    resize: "vertical",
                  }}
                />
              </LabelContainer>
              <LabelContainer>
                <FormGroup1>
                  <StyledButton type="submit" variant="contained" bgColor = {contactButton}>
                  {contactdetails?.[4]?.Title}
                  </StyledButton>
                </FormGroup1>
              </LabelContainer>
            </form>
          </Contactdiv>
          <Contactdiv>
            <div>
              <Typography
                variant="h1"
                sx={{ fontSize: "17px", marginBottom: "10px" }}
              >
                {contactdetails?.[5]?.content}
              </Typography>
              <Box mb={3}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {contactdetails?.[6]?.content}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ fontSize: "13px" }}
                >
                 {contactdetails?.[7]?.content}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ fontSize: "13px" }}
                >
                  {contactdetails?.[8]?.content}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ fontSize: "13px" }}
                >
                  {contactdetails?.[9]?.content}
                </Typography>
              </Box>
            </div>
            <MapDiv>
              <img
                src={api+ contactdetails?.[10]?.mapimage?.data[0]?.attributes?.url}
                alt="Map Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </MapDiv>
         
          </Contactdiv>
        </StyledFormContainer>
      </Styledcontainer>
    </>
  );
};
