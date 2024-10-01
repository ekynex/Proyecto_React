import React from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export const useProductsByCategory = (id) => {
  const [ products, setProducts ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(true);
  const [ error, setError ] = React.useState(false);

  React.useEffect(() => {
    const customQuery = query(
      collection(db, "products"),
      where("category", "==", id),
      //where("price", ">", 100) - para concatenar más filtros
    );

    getDocs(customQuery)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        })
      .catch((error) => setError(true))
      .finally(() => setLoading(false))
  }, [id]);

  return { products, loading }
};
