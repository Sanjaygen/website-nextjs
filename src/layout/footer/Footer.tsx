import Typography from "@mui/material/Typography";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";
import {
  CustomTypography,
  DivWrapper,
  FooterWrapper,
  TypographyStyled,
} from "./Footer.styled";

const FooterMain = () => {
  return (
    <>
      <FooterWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
            <CustomTypography variant="h3">CONTACT US</CustomTypography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              <RoomIcon sx={{ fontSize: 15, marginRight: 1 }} /> Shanti Auto
              Industries Plot No. 402- 403, Sector 7, Phase-II, Gurgaon -
              122052, Haryana, India
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              <EmailIcon sx={{ fontSize: 15, marginRight: 1 }} /> Email:-
              sales@ishwara.in marketing@ishwara.in
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              <PhoneIcon sx={{ fontSize: 15, marginRight: 1 }} /> 9811062289
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
            <CustomTypography variant="h3">COMPANY PROFILE</CustomTypography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              Home
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              Profile
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              Corporate Video
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
            <CustomTypography variant="h3">
              PRODUCTS & SERVICES
            </CustomTypography>
            <Grid container spacing={0} sx={{ marginTop: "10px" }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">Paper bowls</Typography>
                <Typography variant="body2">Paper tubs</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ position: "relative", right: { sm: "0px" } }}
              >
                <Typography variant="body2">Paper boxes</Typography>
                <Typography variant="body2">Paper containers</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">Paper lids</Typography>
                <Typography variant="body2">Paper cups</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ position: "relative", right: { sm: "0px" } }}
              >
                <Typography variant="body2">Paper glass</Typography>
                <Typography variant="body2">Bakery boxes</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomTypography variant="h3">CONNECT WITH US</CustomTypography>
            <DivWrapper
              sx={{
                gap: "20px",
            
              }}
            >
              <FacebookRoundedIcon sx={{ fontSize: 30,marginRight: 1  }} />
              <InstagramIcon sx={{ fontSize: 30,marginRight: 1  }} />
              <WhatsAppIcon sx={{ fontSize: 30,marginRight: 1  }} />
              <TwitterIcon sx={{ fontSize: 30,marginRight: 1  }} />
              <LinkedInIcon sx={{ fontSize: 30,marginRight: 1  }} />
            </DivWrapper>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              We are known for manufacturing and supplying of a wide assortment
              of Paper Glasses and Bowls
            </Typography>
          </Grid>
        </Grid>
      </FooterWrapper>
      <TypographyStyled variant="body2">
        Copyright © ISHWARA | All Rights Reserved
      </TypographyStyled>
    </>
  );
};

export default FooterMain;
