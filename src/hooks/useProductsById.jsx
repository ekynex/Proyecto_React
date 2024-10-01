import React from 'react'
import { getProductsById } from '../services/products.service';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase';

export const useProductsById = (id) => {
  const [ product, setProducts ] = React.useState({});
  const [ loading, setLoading ] = React.useState(true);
  const [ error, setError ] = React.useState(false);

  React.useEffect(() => {
    const productItem = doc(db, 'products', id);
    getDoc(productItem)
    .then((snapshot) => {
      setProducts({id: snapshot.id, ...snapshot.data() })
    })
    .catch((error) => {
      console.log(error);
      setError(true)
    })
    .finally(() => setLoading(false));
  });

  return { product, loading };
};
