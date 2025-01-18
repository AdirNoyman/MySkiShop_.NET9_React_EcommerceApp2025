import { useParams } from 'react-router';
import {
  Button,
  Divider,
  Grid2 as Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useFetchProductDetailsQuery } from './catalogApi';

const ProductDetails = () => {
  // Get the id from the URL
  const { id } = useParams();
  const {data: product, isLoading} = useFetchProductDetailsQuery(Number(id));

  if (!product || isLoading) return <div>Loading 🙄...</div>;

  const productDetails = [
    { label: 'Name', value: product.name },
    { label: 'Description', value: product.description },
    { label: 'Type', value: product.type },
    { label: 'Brand', value: product.brand },
    { label: 'Quantity in stock', value: product.quantityInStock },
  ];

  return (
    <Grid container spacing={6} maxWidth="lg" sx={{ mx: 'auto' }}>
      <Grid size={6}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
          
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{'& td': {fontSize: '1rem'}}}>
            <TableBody>
              <TableRow>
                {productDetails.map((detail, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                      <TableCell>{detail.value}</TableCell>
                    </TableRow>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} marginTop={3}>
          <Grid size={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity in basket"
              fullWidth
              defaultValue={1}
            />
          </Grid>
          <Grid size={6}>
            <Button sx={{height: '55px'}} size="large" color="primary" variant="contained" fullWidth>
              Add to basket
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
