import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid } from '@mui/material';
import { StyledCard, StyledCardContent, StyledThypography, ThypographyProduct } from './ProductCard.styled';

const ActionAreaCard = () => {

  const image = [
    {
      "id": 3,
      "img": "/images/tubs.jpg",
      "text": "PAPER TUBS",
      "lable":"View Product"
    },
    {
      "id": 4,
      "img": "/images/cups.jpg",
      "text": "PAPER CUPS",
      "lable":"View Product"
    },
    {
      "id": 6,
      "img": "/images/glass.jpg",
      "text": "PAPER GLASS",
      "lable":"View Product"
    },
    {
      "id": 7,
      "img": "/images/containers.jpeg",
      "text": "PAPER CONTAINERS",
      "lable":"View Product"
    },
  ]
  return (
    <Container>
      <Grid container spacing={5} style={{ marginTop: '100px' }}>
        {image.map((result, index) => (
          <Grid xs={12} sm={4} key={index}>
            <Card style={{ padding: '10px', marginLeft: '30px', marginTop: '20px' }}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="280px"
                  image={result.img}
                  alt={result.text}
                />
              </StyledCard>
              <StyledCardContent >
                    <ThypographyProduct variant="h5">
                      {result.text}
                    </ThypographyProduct>
                    <StyledThypography variant="subtitle1" color='blue' style={{cursor:'pointer'}}>
                      {result.lable}
                    </StyledThypography>
              </StyledCardContent >
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ActionAreaCard;
