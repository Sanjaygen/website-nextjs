import React from "react";
import {
  BackgroundImage,
  ImageContainer,
  Overlay,
  StyledBox,
  StyledButton,
  StyledDate,
  StyledDescription,
  StyledLink,
  StyledSubtitle,
  StyledTitle,
  Title,
} from "./Blog.styled";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import { useQuery } from "@apollo/client";
import { BlogQuery } from "./query";
import { api } from "@/service/backend-api";

const Blog = () => {
  const {  data } = useQuery(BlogQuery);
  const { blogs } = data || {};
  const { blogbanner, bloglist } = blogs?.data?.[0].attributes || {};

  console.log('blogbanner',blogbanner)
  console.log('bloglist',bloglist)

  const getIamge = (imgData:any) => {
    const { url } = imgData?.data?.[0]?.attributes || {};
    console.log(`${api}${url}`,'url-----')
    return `${api}${url}`
  }
  const blogBgColor = blogbanner?.[0]?.colors?.theme?.[0]?.colors?.bgcolor;
  const blogText = blogbanner?.[0]?.colors?.theme?.[0]?.colors?.text;
  const blogButton = bloglist?.[9]?.blogbutton?.[0]?.colors?.button[0]?.colors?.bgcolor;


  
  return (
    <>
      <BackgroundImage style={{ background: `url(${api + blogbanner?.[0]?.backgroundImage?.data[0]?.attributes?.url})`}}>
        <Overlay bgColor={blogBgColor} textColor={blogText}>
          <Title>{blogbanner?.[0]?.title}</Title>
        </Overlay>
        <ImageContainer>
          <StyledLink href="/">{blogbanner?.[0]?.link}</StyledLink>{blogbanner?.[0]?.content}
        </ImageContainer>
      </BackgroundImage>
      <Container>
        <Grid container>
          {bloglist?.map((result:any, index:number) => (
            <Grid xs={12} sm={4} key={index} sx={{ marginBottom: "20px" }}>
              <Card
                sx={{
                  maxWidth: { xs: "100%", sm: "100%" },
                  height: "auto",
                  boxShadow: "none",
                  border: "1px solid silver",
                  borderBottom: "none",
                  marginLeft: { xs: 0, sm: "40px" },
                }}
              >
                <StyledDate textColor={blogText}>{result.date}</StyledDate>
                <CardMedia
                  component="img"
                  image={getIamge(result.image)}
                  sx={{
                    cursor: "pointer",
                    ":hover": {
                      transform: "scale(1.2)",
                      transition: "all 0.4s ease 0s",
                      opacity: "0.5",
                    },
                  }}
                />
              </Card>
              <CardContent
                sx={{
                  border: "1px solid silver",
                  borderTop: "none",
                  maxWidth: { xs: "100%", sm: "100%" },
                  marginLeft: { xs: 0, sm: "40px" },
                }}
              >
                <StyledTitle href="/" variant="h4">
                  {result.title}
                </StyledTitle>
                <StyledBox>
                  <Person2Icon sx={{ fontSize: "16px", color: "#a1a1a1" }} />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#a1a1a1",
                      position: "relative",
                      marginTop: "-19px",
                      marginLeft: "25px",
                      fontStyle: "italic",
                      fontWeight: 300,
                    }}
                  >
                    {bloglist?.[9]?.blogauthor?.[0]?.content}
                    <Link
                      href="/"
                      sx={{
                        textDecoration: "none",
                        color: "#a1a1a1",
                        ":hover": {
                          color: "#ce9634",
                        },
                      }}
                    >
                      {" "}
                      {bloglist?.[9]?.blogauthor?.[0]?.authorlink}
                    </Link>
                  </Typography>
                </StyledBox>
                <StyledSubtitle href="/" variant="h4">
                  {result.subtitle}
                </StyledSubtitle>
                <br />
                <StyledDescription href="/" variant="body2">
                  {result.description}
                </StyledDescription>
                <Box>
                  <StyledButton href="/" textColor={blogText} bgColor= {blogButton}>{bloglist?.[9]?.blogbutton?.[0]?.Title}</StyledButton>
                </Box>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
