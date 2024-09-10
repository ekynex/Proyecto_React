import React from 'react'
import { getProductsById } from '../services/products.service';

export const useProductsById = (id) => {
  const [ product, setProducts ] = React.useState({});
  const [ loading, setLoading ] = React.useState(true);

  React.useEffect(() => {
    getProductsById(id)
    .then((response) => {
        setProducts(response.data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        setLoading(false);
    })
  });

  return { product, loading };
};
