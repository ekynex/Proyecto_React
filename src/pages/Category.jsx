import React from 'react'
import { useParams } from 'react-router'
import { ItemListContainer } from '../components';
import { useProductsByCategory } from '../hooks';
import { Spinner, Flex } from "@chakra-ui/react";

export const Category = () => {
  const { categoryId } = useParams();

  const { products, loading } = useProductsByCategory(categoryId);

  if (loading) {
    return <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
    <Spinner />
      </Flex>;
  } else {
    return <ItemListContainer products={products} />;
  }
};
