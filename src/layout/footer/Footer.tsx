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
  StyledLink,
  TypographyStyled,
} from "./Footer.styled";
import { useQuery } from "@apollo/client";
import { QUERY } from "@/pages/homepage/query";

const FooterMain = (props:any) => {
  const footers = props;
  console.log('footers',footers)

  const { loading, error, data } = useQuery(QUERY);

  return (
    <>
      <FooterWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
            <CustomTypography variant="h3" sx={{ marginLeft: {xs: 0 , lg: '-90px'} }}>{footers[0]?.title}</CustomTypography>
            <Typography variant="body2" sx={{ marginTop: "10px", marginLeft: {xs: 0 , lg: '-90px'}, lineHeight: '30px' }}>
              <RoomIcon sx={{ fontSize: 15, marginRight: 1 }} /> {footers[0]?.addressdetail[0]?.content}</Typography>
            <Typography variant="body2" sx={{ marginTop: "15px" }}>
              <EmailIcon sx={{ fontSize: 15, marginRight: 1, marginLeft: {xs: 0 , lg: '-90px'} }} />{footers[0]?.emaildetail[0]?.content}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "15px" }}>
              <PhoneIcon sx={{ fontSize: 15, marginRight: 1, marginLeft:{xs: 0 , lg: '-90px'} }} />{footers[0]?.phonedetail[0]?.number}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 }, marginLeft: {xs: 0 , lg: '30px'} }}>
            <CustomTypography variant="h3">{footers[1]?.title}</CustomTypography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              {footers[1]?.company[0]?.content}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
            {footers[1]?.company[1]?.content}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
            {footers[1]?.company[2]?.content}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
            {footers[1]?.company[3]?.content}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
            <CustomTypography variant="h3">
            {footers[2]?.title}
            </CustomTypography>
            <Grid container spacing={0} sx={{ marginTop: "10px" }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">{footers[2]?.company[0]?.content}</Typography>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>{footers[2]?.company[1]?.content}</Typography>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>{footers[2]?.company[2]?.content}</Typography>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>{footers[2]?.company[3]?.content}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginRight: '-50px', marginLeft: {xs: 0 , lg: '20px'} }}>
            <CustomTypography variant="h3">{footers[3]?.title}</CustomTypography>
            <DivWrapper
              sx={{
                gap: "20px",
              }}
            >
              <FacebookRoundedIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <TwitterIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <InstagramIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <LinkedInIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <WhatsAppIcon sx={{
                fontSize: 28,
                marginRight: 1,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
            </DivWrapper>
            <Typography variant="body2" sx={{ marginTop: "10px", lineHeight: '25px' }}>{footers[3]?.description}</Typography>
          </Grid>
        </Grid>
      </FooterWrapper>
      <TypographyStyled variant="body2" sx={{marginLeft:{xs:'0px'}}} style={{ backgroundColor: `${footers[4]?.colors?.copy[0]?.colors?.becolor}`,color:`${footers[4]?.colors.copy[0].colors.text}`}}>
      {footers[4]?.title}
        <StyledLink href="/">{footers[4]?.content}</StyledLink>
      </TypographyStyled>
    </>
  );
};

export default FooterMain;