import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 , backgroundColor: '#426F99'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;