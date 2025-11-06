import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';


const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 , backgroundColor: '#426F99'}}>

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
        <Button onClick={() => {navigate(`/product/${product.id}`)}} variant="contained" color='success' style={{marginRight: '5px'}}>Product Details</Button>
        <Button variant="contained" color='error'>Add to Cart</Button>
    </Card>
  );
}

export default ProductCard;