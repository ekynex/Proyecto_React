import React from 'react'
import { useParams } from 'react-router';
import { useProductsById } from '../hooks';
import { ItemDetailContainer } from '../components';
import { Spinner, Flex } from "@chakra-ui/react";

export const Item = () => {
    const { id } = useParams();
    const { product, loading } = useProductsById(id);
    
  return loading ? 
  <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      <Spinner />
  </Flex>
    : <ItemDetailContainer product={product} />;
  
}
