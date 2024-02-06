/* eslint-disable @next/next/no-img-element */
import { Box, Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { QUERY } from "@/pages/homepage/query";
import { api } from "@/service/backend-api";
import { SlideContainer, SlideItem } from "./Store.styled";

const Store = () => {
  const { loading, error, data } = useQuery(QUERY);
  const storeData = data?.homes?.data || [];

  return (
    <Box sx={{overflow:"hidden"}}>
    <SlideContainer>
      <Grid container spacing={2}>
        {storeData.map((home:any, homeIndex:any) => (
          <Grid item key={homeIndex}>
            {home.attributes.client.map((clientImg:any, clientIndex:any) => (
              <div key={clientIndex} style={{ display: 'flex'}}>
                {clientImg.clientlogo.map((logo:any, logoIndex:any) => (
                  <SlideItem key={logoIndex}>  
                    <img
                      style={{ width: "100%", marginRight: "10px"}}
                      src={api + logo.logos.data[0]?.attributes.url}
                      alt={clientImg.Title}
                      width={100}
                      height={0}
                    />
                  </SlideItem>
                ))}
              </div>
            ))}
          </Grid>
        ))}
      </Grid>
    </SlideContainer>
    </Box>
  );
};

export default Store;
