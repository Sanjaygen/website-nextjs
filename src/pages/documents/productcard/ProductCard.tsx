import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid } from '@mui/material';
import { StyledCard, StyledCardContent, StyledThypography, ThypographyProduct } from './ProductCard.styled';
import { QUERY } from '@/pages/homepage/query';
import { useQuery } from '@apollo/client';
import { api } from '@/service/backend-api';

const ActionAreaCard = (props : any) => {
  console.log('product',props);
  const { data, loading, error,  } = useQuery(QUERY);

  const homesData = data?.homes?.data || [];

  return (
    <>
      <Grid spacing={5} sx={{ marginTop: '20px'}}  >
        {homesData.map((home: any, homeIndex: number) => (
          <Grid  key={homeIndex}  sx={{display:{xs:"block",sm:"flex"},marginLeft:{xs:0,sm:"50px"},marginRight:{xs:0,sm:"40px"}}}>
            {home.attributes.PRODUCTS.map((product: any, productIndex: number) => (
              <Card key={productIndex} sx={{ padding: '10px', margin: '10px', marginTop: '20px',width:{xs:"98%",sm:"100%"}}}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="280px"
                    image={api+product.productimages.data[0].attributes.url}
                    alt={product.Title}
                  />
                </StyledCard>
                <StyledCardContent>
                  <ThypographyProduct variant="h5">
                    {product.Title}
                  </ThypographyProduct>
                  <StyledThypography variant="subtitle1" color='#007bff' style={{ cursor: 'pointer' }}>
                    {product.link}
                  </StyledThypography>
                </StyledCardContent>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>
      </>

  );
};


export default ActionAreaCard;
