import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

type Props = {

    product: Product;
}

const ProductCard = ({ product }: Props) => {

    const { name: productName, price, pictureUrl } = product;
  return (
    <div>        
          <Card elevation={3} sx={{width: 280, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardMedia sx={{height: 240, backgroundSize: 'cover'}} image={pictureUrl} title={productName}/>
            <CardContent>
                <Typography gutterBottom sx={{textTransform: 'uppercase'}} variant='subtitle2'>{productName}</Typography>
                <Typography variant='h6' sx={{color: 'secondary.main'}}>${(price / 100).toFixed(2)}</Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
                <Button>Add to Cart</Button>
                <Button>View Details</Button>
            </CardActions>
          </Card>
    </div>
  )
}

export default ProductCard